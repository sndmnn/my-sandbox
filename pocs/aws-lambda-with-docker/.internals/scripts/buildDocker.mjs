import minimist from 'minimist';
import { randomUUID } from 'crypto';
import config from '../config/index.mjs';
import assemble from '../tools/assembleSingleLambda.mjs';
import buildDocker from '../tools/buildDocker.mjs';

const argv = minimist(process.argv.slice(2));

let printStdout = argv['p'] || argv['printStdout'];

if (!printStdout) {
  printStdout = true;
}

let lambdaFolder = argv['l'] || argv['lambdaFolder'];

if (!lambdaFolder) {
  console.warn('No lambda folder specified. Using default lambda folder.');
  lambdaFolder = config.lambdaFolder;
}

let imageTag = argv['t'] || argv['imageTag'];

if (!imageTag) {
  console.warn('No image tag specified. Using generated image tag.');
  imageTag = `lambda-${randomUUID()}`;
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

  await buildDocker({
    lambdaFolder,
    imageTag,
    printStdout,
  });
}

main();
