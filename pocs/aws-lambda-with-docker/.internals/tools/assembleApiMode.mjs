import fs from 'fs';
import path from 'path';
import config from '../config/index.mjs';
import assembleSingleLambda from './assembleSingleLambda.mjs';

const projectRoot = config.projectRoot;

/**
 * Builds the file structure to the project in API mode, assembling each lambda function in a separate folder
 *
 * @param {Object} config
 * @param {string} config.apiModeLambdasFolder Path to the folder where the lambda functions will be assembled, relative to the project root
 * @param {Object[]} config.apiRoutes Array of route configuration objects
 * @param {string} config.apiRoutes[].routeName Name of the route
 * @param {string} config.apiRoutes[].entryPoint Entry point of the handler
 */
export default function assembleApiMode({
  apiModeLambdasFolder = config.apiModeLambdasFolder,
  apiRoutes,
}) {
  const apiModeLambdasFolderPath = path.join(projectRoot, apiModeLambdasFolder);

  // Cleans up previous build
  if (fs.existsSync(apiModeLambdasFolderPath)) {
    fs.rmSync(apiModeLambdasFolderPath, { recursive: true });
  }

  apiRoutes.forEach(({ routeName, entryPoint }) => {
    assembleSingleLambda({
      entryPoint,
      lambdaFolder: path.join(apiModeLambdasFolder, routeName),
    });
  });
}
