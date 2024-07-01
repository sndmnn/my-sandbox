import minimist from 'minimist';
import fs from 'fs';
import path from 'path';
import config from '../config/index.mjs';
import buildZip from '../tools/buildZip.mjs';
import assemble from '../tools/assembleSingleLambda.mjs';

const argv = minimist(process.argv.slice(2));

const projectRoot = config.projectRoot;

let lambdaFolder = argv['l'] || argv['lambdaFolder'];

if (!lambdaFolder) {
  console.warn('No lambda folder specified. Using default lambda folder.');
  lambdaFolder = config.lambdaFolder;
}

let zipOutput = argv['z'] || argv['zipOutput'];

if (!zipOutput) {
  fs.mkdirSync(path.join(projectRoot, 'out'), { recursive: true });
  zipOutput = path.join(projectRoot, 'out', `lambda-${Date.now()}.zip`);
}

const entryPoint = argv['e'] || argv['entryPoint'];

async function main() {
  if (entryPoint) {
    console.warn(
      'An entry point was specified and the project will be assembled.'
    );

    await assemble({
      entryPoint,
      lambdaFolder,
    });
  }

  await buildZip({
    zipOutput,
    lambdaFolder,
  });
}

main();
