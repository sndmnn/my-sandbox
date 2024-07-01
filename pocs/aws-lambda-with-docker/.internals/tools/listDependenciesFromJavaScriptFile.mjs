import { consola } from 'consola';
import fs from 'fs/promises';
import path from 'path';
import { parse as acornParse } from 'acorn';
import { simple as acornSimpleWalk } from 'acorn-walk';
import config from '../config/index.mjs';

async function parseFile(filePath) {
  const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' });
  const ast = acornParse(fileContent, {
    ecmaVersion: config.ecmaVersion,
    sourceType: 'module',
  });

  return ast;
}

function isCodeFile(filePath) {
  const extensions = config.codeExtensions;

  for (const extension of extensions)
    if (filePath.endsWith(extension)) return true;

  return false;
}

async function extractImportTargetsFromFile(filePath) {
  const ast = await parseFile(filePath);
  const importTargets = [];

  acornSimpleWalk(ast, {
    ImportDeclaration(node) {
      const importTarget = node.source.value;
      importTargets.push(importTarget);
    },
    ImportExpression(node) {
      const importTarget = node.source.value;
      importTargets.push(importTarget);
    },
    CallExpression(node) {
      if (node.callee.name === 'require') {
        const importTarget = node.arguments[0].value;
        importTargets.push(importTarget);
      }
    },
  });

  return importTargets;
}

export default async function listDependenciesFromJavaScriptFile(filePath) {
  try {
    const stat = await fs.lstat(filePath);

    if (!stat.isFile() || !isCodeFile(filePath)) {
      consola.error(
        `File ${filePath} is not a code file and cannot be used as an entry point.`
      );
      return;
    }
  } catch {
    consola.error(`Could not stat file ${filePath}`);
  }

  const importTargets = await extractImportTargetsFromFile(filePath);
  const dependencyArray = [];

  for (const importTarget of importTargets) {
    let resolvedDependencyPath = path.resolve(
      path.dirname(filePath),
      importTarget
    );

    const extension = path.extname(resolvedDependencyPath);
    if (!extension) {
      resolvedDependencyPath += '.js';
    }

    let stat;

    try {
      stat = await fs.lstat(resolvedDependencyPath);
    } catch (err) {
      try {
        resolvedDependencyPath = resolvedDependencyPath.split('.js')[0];
        stat = await fs.lstat(resolvedDependencyPath);
      } catch {
        continue;
      }
    }

    if (stat.isDirectory()) {
      const indexPath = path.resolve(resolvedDependencyPath, 'index.js');
      let statIndexPath;

      try {
        statIndexPath = await fs.lstat(indexPath);
      } catch {
        continue;
      }

      if (!statIndexPath.isFile()) continue;

      resolvedDependencyPath = indexPath;
    }

    if (isCodeFile(resolvedDependencyPath)) {
      const nestedDependencies = await listDependenciesFromJavaScriptFile(
        resolvedDependencyPath
      );

      dependencyArray.push(...nestedDependencies);
    }

    dependencyArray.push(resolvedDependencyPath);
  }

  return dependencyArray;
}
