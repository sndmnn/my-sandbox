import yaml from 'yaml';
import path from 'path';
import fs from 'fs';
import config from '../config/index.mjs';

const projectRoot = config.projectRoot;
const sourceFolder = config.srcFolder;

/**
 *
 * @param {Object} config
 * @param {number} config.apiPort Port on which the API will be available (defaults to 3000)
 * @param {Object[]} config.apiRoutes Array of route configuration objects
 * @param {string} config.apiRoutes[].routeName Name of the route
 * @param {string} config.apiRoutes[].entryPoint Entry point of the handler
 * @param {string} config.apiModeLambdasFolder Path to the folder where the lambda functions will be assembled, relative to the project root
 */
export default function generateDockerComposeConfigurationFile({
  apiPort = 3000,
  apiRoutes,
  apiModeLambdasFolder = config.apiModeLambdasFolder,
}) {
  const apiServices = {};

  const lambdaTaskRoot = '/var/task';

  apiRoutes.forEach((route) => {
    const apiHandlerLambdaFolder = path.join(
      apiModeLambdasFolder,
      route.routeName
    );

    apiServices[route.routeName] = {
      build: {
        context: projectRoot,
        dockerfile: path.join(projectRoot, 'Dockerfile'),
        args: {
          ENTRY_POINT: route.entryPoint.split(sourceFolder + '/')[1],
          LAMBDA_FOLDER: apiHandlerLambdaFolder,
        },
      },
      volumes: [
        `${projectRoot}/${apiHandlerLambdaFolder}:${lambdaTaskRoot}/lambda:ro`,
      ],
    };
  });

  const dockerComposeConfig = {
    services: {
      ...apiServices,
      nginx: {
        image: 'nginx',
        ports: [`${apiPort}:80`],
        volumes: [
          `${projectRoot}/nginx.conf:/etc/nginx/conf.d/default.conf:ro`,
        ],
      },
    },
  };

  fs.writeFileSync(
    path.join(projectRoot, 'docker-compose.yml'),
    yaml.stringify(dockerComposeConfig)
  );
}
