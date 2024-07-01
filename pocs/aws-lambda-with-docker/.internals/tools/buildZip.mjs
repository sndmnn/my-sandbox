import { consola } from 'consola';
import archiver from 'archiver';
import fs from 'fs';

export default async function buildZip({ zipOutput, lambdaFolder }) {
  consola.info(`Compressing ${lambdaFolder}`);
  consola.info(`Saving to ${zipOutput}`);

  const zip = archiver('zip');
  const output = fs.createWriteStream(zipOutput);

  output.on('close', () => {
    consola.info(`Zipped ${zip.pointer()} bytes`);
  });

  zip.pipe(output);

  zip.on('error', (err) => {
    consola.error('An error occurred while zipping the lambda folder.', err);
  });

  zip.directory(lambdaFolder, false);
  await zip.finalize();

  consola.success('Done!');
}
