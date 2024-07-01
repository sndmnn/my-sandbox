import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import config from '../config/index.mjs';

const { compile: handlebarsCompile } = Handlebars;
const projectRoot = config.projectRoot;

/**
 *
 * @param {Object} config Array of route configuration objects
 * @param {Object[]} config.apiRoutes Array of route configuration objects
 * @param {string} config.apiRoutes[].path Path of the route
 * @param {string} config.apiRoutes[].routeName Name of the route. Will be used as hostname of the lambda function on the docker network
 */
export default function generateNginxConfigurationFile({ apiRoutes }) {
  const nginxConfTemplatePath = path.join(
    projectRoot,
    '.internals',
    'handlebars',
    'nginx_conf.hbs'
  );

  const nginxConfTemplateContent = fs.readFileSync(
    nginxConfTemplatePath,
    'utf8'
  );

  const nginxConfTemplate = handlebarsCompile(nginxConfTemplateContent);

  const nginxConfig = nginxConfTemplate({
    routes: apiRoutes.map(({ path, routeName }) => ({
      path,
      lambdaHost: routeName,
    })),
  });

  fs.writeFileSync(path.join(projectRoot, 'nginx.conf'), nginxConfig);
}
