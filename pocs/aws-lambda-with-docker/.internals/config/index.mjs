import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

const CONFIG_FILE = path.join(projectRoot, 'config.json');

const fileData = fs.readFileSync(CONFIG_FILE, 'utf8');
const config = JSON.parse(fileData);

export default {
  ...config,
  projectRoot,
  srcFolder: config.srcFolder || 'src',
  lambdaFolder: config.lambdaFolder || 'lambda',
  apiModeLambdasFolder: config.apiModeLambdasFolder || 'api-lambdas',
};
