const path = require('path');
const { writeFileSync } = require('fs');
const extractWMSRequirementsSheetDataScript = require('./scripts/extractWMSRequirementsSheetDataScript');
const parseSheetsIntoArraysOfArrays = require('./scripts/parseSheetsIntoArraysOfArraysScript');
const extractTestPlansSheetDataScript = require('./scripts/extractTestPlansSheetDataScript');
const linkTestPlansToTestCasesScript = require('./scripts/linkTestPlansToTestCasesScript');
const linkTestCasesToRequirements = require('./scripts/linkTestCasesToRequirements');

const INPUT_FOLDER = path.join(__dirname, '..', 'in');
const OUT_FOLDER = path.join(__dirname, '..', 'out');
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
const linkedRequirements = linkTestCasesToRequirements(
  linkedTestCases,
  extractWMSRequirementsDataResult.verifyRelations,
  extractWMSRequirementsDataResult.requirements
);

let md = '';

for (const requirement of linkedRequirements) {
  md += requirement.toMarkdown();
}

writeFileSync(path.join(OUT_FOLDER, 'requirements.md'), md);

writeFileSync(
  path.join(OUT_FOLDER, 'requirements.json'),
  JSON.stringify(extractWMSRequirementsDataResult.requirements, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'test-cases.json'),
  JSON.stringify(extractWMSRequirementsDataResult.testCases, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'verify-relations.json'),
  JSON.stringify(extractWMSRequirementsDataResult.verifyRelations, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'derive-relations.json'),
  JSON.stringify(extractWMSRequirementsDataResult.deriveRelations, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'notes.json'),
  JSON.stringify(extractWMSRequirementsDataResult.notes, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'anchor-relations.json'),
  JSON.stringify(extractWMSRequirementsDataResult.anchorRelations, null, 2)
);

writeFileSync(
  path.join(OUT_FOLDER, 'test-plans.json'),
  JSON.stringify(extractTestPlansResults.testPlans, null, 2)
);
