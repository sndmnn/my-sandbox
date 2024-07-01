import { consola } from 'consola';
import { exec } from 'child_process';
import config from '../config/index.mjs';
import generateDockerComposeConfigurationFile from './generateDockerComposeConfigurationFile.mjs';
import generateNginxConfigurationFile from './generateNginxConfigurationFile.mjs';
import assembleApiMode from './assembleApiMode.mjs';

export default async function apiModeDevelopment({
  apiModeLambdasFolder = config.apiModeLambdasFolder,
  apiPort = 3000,
}) {
  const apiRoutes = Object.entries(config.apiRoutes).map(
    ([route, entryPoint]) => ({
      path: route,
      routeName: route === '/' ? 'root' : route.substring(1).replace('/', '-'),
      entryPoint,
    })
  );

  apiRoutes.forEach((route) => consola.info(route.path));

  assembleApiMode({
    apiRoutes,
    apiModeLambdasFolder,
  });

  generateDockerComposeConfigurationFile({
    apiPort,
    apiRoutes,
    apiModeLambdasFolder,
  });

  generateNginxConfigurationFile({
    apiRoutes,
  });

  exec(`docker compose up --remove-orphans --build`);

  // TODO: hot reload
  // consola.info('Development server started');
  // consola.info('Watching for changes in', sourcePath);

  // fs.watch(sourcePath, { recursive: true }, (event, file) => {
  //   consola.info('Change detected in', file);
  //   assembleApiMode({
  //     apiRoutes,
  //     apiModeLambdasFolder,
  //   });
  // });
}
