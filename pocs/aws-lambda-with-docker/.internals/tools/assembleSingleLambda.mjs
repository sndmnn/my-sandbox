import { consola } from 'consola';
import path from 'path';
import fs from 'fs';
import extractDependenciesFrom from './listDependenciesFromJavaScriptFile.mjs';
import config from '../config/index.mjs';

const projectRoot = config.projectRoot;
const sourceFolder = config.srcFolder;

/**
 * Assembles a single lambda handler into its own folder
 *
 * @param {Object} config
 * @param {string} config.entryPoint Entry point of the handler relative to the project root
 * @param {string} config.lambdaFolder Path to the folder where the lambda function will be assembled, relative to the project root
 */
export default async function assemble({ entryPoint, lambdaFolder }) {
  // TODO: ensure that all dependecies returned are relative to the project root
  const dependencies = await extractDependenciesFrom(entryPoint);
  dependencies.push(entryPoint);

  const relativeFolderPaths = dependencies.map((dependency) => {
    const relativePath = path.join(projectRoot, dependency);
    return relativePath.split(sourceFolder)[1];
  });

  const lambdaFolderPath = path.join(projectRoot, lambdaFolder);

  if (fs.existsSync(lambdaFolderPath)) {
    fs.readdirSync(lambdaFolderPath).forEach((file) => {
      fs.rmSync(path.join(lambdaFolderPath, file), { recursive: true });
    });
  }

  for (const rp of relativeFolderPaths) {
    const dependencyParentDirectoryPath = path.join(
      projectRoot,
      lambdaFolder,
      path.dirname(rp)
    );

    if (!fs.existsSync(dependencyParentDirectoryPath)) {
      fs.mkdirSync(dependencyParentDirectoryPath, { recursive: true });
    }

    fs.copyFileSync(
      path.join(projectRoot, sourceFolder, rp),
      path.join(projectRoot, lambdaFolder, rp)
    );
  }

  consola.success(`${lambdaFolder} assembled`);
}
