const path = require('path');
const extractWMSRequirementsSheetDataScript = require('./scripts/extractWMSRequirementsSheetDataScript');
const parseSheetsIntoArraysOfArrays = require('./scripts/parseSheetsIntoArraysOfArraysScript');
const extractTestPlansSheetDataScript = require('./scripts/extractTestPlansSheetDataScript');
const linkTestPlansToTestCasesScript = require('./scripts/linkTestPlansToTestCasesScript');
const linkTestCasesToRequirements = require('./scripts/linkTestCasesToRequirements');
const transformRequirementsListIntoHTMLFile = require('./scripts/transformRequirementsListIntoHTMLFile');
const { INPUT_FOLDER } = require('./config');

const SHEET_PATH = path.join(INPUT_FOLDER, 'raw.xlsx');

const arrayOfArraySheets = parseSheetsIntoArraysOfArrays(SHEET_PATH);

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

// Transforms the requirements with tests into an HTML file and
// saves it in the output folder
transformRequirementsListIntoHTMLFile(requirementsWithTests);
