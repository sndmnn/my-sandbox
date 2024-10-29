const { writeFileSync } = require('fs');
const { join } = require('path');
const extractWMSRequirementsSheetDataScript = require('../scripts/extractWMSRequirementsSheetDataScript');
const parseSheetsIntoArraysOfArrays = require('../scripts/parseSheetsIntoArraysOfArraysScript');
const extractTestPlansSheetDataScript = require('../scripts/extractTestPlansSheetDataScript');
const linkTestPlansToTestCasesScript = require('../scripts/linkTestPlansToTestCasesScript');
const linkTestCasesToRequirements = require('../scripts/linkTestCasesToRequirements');
const transformRequirementsListIntoHTMLFile = require('../scripts/transformRequirementsListIntoHTMLFile');
const groupRequirementsScript = require('../scripts/groupRequirementsScript');

function transform(inputFile, options) {
  const arrayOfArraySheets = parseSheetsIntoArraysOfArrays(inputFile);

  // Extract Requirements, Test Cases, Verify Relations, Derive Relations, Notes, and Anchor Relations
  const extractWMSRequirementsDataResult =
    extractWMSRequirementsSheetDataScript(arrayOfArraySheets);

  // Extract Test Plans (the steps for each test case)
  const extractTestPlansResults =
    extractTestPlansSheetDataScript(arrayOfArraySheets);

  // Links the test plans to the test cases
  const linkedTestCases = linkTestPlansToTestCasesScript(
    extractTestPlansResults.testPlans,
    extractWMSRequirementsDataResult.testCases
  );

  // Links linked test cases (test cases with steps) to requirements
  const requirementsWithTests = linkTestCasesToRequirements(
    linkedTestCases,
    extractWMSRequirementsDataResult.verifyRelations,
    extractWMSRequirementsDataResult.requirements
  );

  const groupedRequirements = groupRequirementsScript(requirementsWithTests);

  const formats = {
    html: {
      transformFn: transformRequirementsListIntoHTMLFile,
      extension: 'html',
    },
  };

  // Transforms the requirements with tests into an HTML file and
  // saves it in the output folder
  Object.keys(groupedRequirements).forEach((key) => {
    const sortedRequirements = groupedRequirements[key].sort(
      (a, b) => a.order - b.order
    );
    const format = formats[options.format];

    if (!format) {
      throw new Error(`Invalid format option "${options.transformInto}"`);
    }

    const result = format.transformFn(sortedRequirements);
    writeFileSync(join(options.output, `${key}.${format.extension}`), result);
  });
}

module.exports = transform;
