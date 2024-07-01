import { consola } from 'consola';
import { execFileSync, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import config from '../config/index.mjs';

const projectRoot = config.projectRoot;
const dockerBuildScript = config.dockerBuildScript;

export default async function buildDocker({
  lambdaFolder,
  imageTag,
  printStdout = true,
}) {
  const buildScriptPath = path.join(projectRoot, dockerBuildScript);

  if (fs.existsSync(buildScriptPath)) {
    const { stdout, stderr } = execFileSync(
      path.join(projectRoot, dockerBuildScript),
      {
        cwd: projectRoot,
        env: {
          LAMBDA_FOLDER: lambdaFolder,
          IMAGE_NAME: imageTag,
        },
      }
    );

    if (stderr) {
      consola.error(
        'An error occurred while executing the docker build script.',
        stderr
      );
    }

    if (printStdout) {
      consola.info(stdout);
    }
  } else {
    const { stderr } = execSync(`docker build -t ${imageTag} .`, {
      cwd: projectRoot,
    });

    if (stderr) {
      consola.error(
        'An error occurred while executing the docker build script.',
        stderr
      );
    }
  }

  consola.success(`Built ${imageTag} from ${lambdaFolder}`);
}
