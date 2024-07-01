import minimist from 'minimist';
import { consola } from 'consola';
import config from '../config/index.mjs';
import assemble from '../tools/assembleSingleLambda.mjs';
import assembleApiMode from '../tools/assembleApiMode.mjs';

const argv = minimist(process.argv.slice(2));

const entryPoint = argv['entryPoint'] || argv['e'];

const apiMode = argv['apiMode'] || argv['a'];

if (!apiMode && !entryPoint) {
  consola.error(
    'Please specify an entry point with the -e or --entryPoint flag.'
  );
  process.exit(1);
}

let lambdaFolder = argv['l'] || argv['lambdaFolder'];

if (!apiMode && !lambdaFolder) {
  consola.warn('No lambda folder specified. Using default lambda folder.');
  lambdaFolder = config.lambdaFolder;
}

if (apiMode) {
  consola.warn('API mode enabled. Assembling API.');
  assembleApiMode();
} else {
  assemble({
    entryPoint,
    lambdaFolder,
  });
}
