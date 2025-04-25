const { PDFNet } = require('@pdftron/pdfnet-node');
const { mkdirSync, existsSync } = require('fs');
const objectifyDirectoryTree = require('directory-tree');

const { inDir } = require('./fileSystemConfig.js');

const rootTree = objectifyDirectoryTree(inDir);

/**
 * @type objectifyDirectoryTree.DirectoryTree[]
 */
const branches = [...rootTree.children];

const filePaths = [];

while (branches.length > 0) {
  const branch = branches.shift();

  if (branch.children) {
    branches.push(...branch.children);

    const branchOutPath = branch.path.replace('in', 'out');

    if (!existsSync(branchOutPath)) {
      mkdirSync(branchOutPath);
    }
  } else {
    filePaths.push(branch.path);
  }
}

(
  async () => {
    await PDFNet.initialize();

    try {
      for (const filePath of filePaths) {
        const pdfa = await PDFNet.PDFACompliance.createFromFile(
          true,
          filePath,
        );

        await pdfa.saveAsFromFileName(filePath.replace('in', 'out'));
      }
    } catch (err) {
      console.log(err.message);
    }
  }
)();
