const path = require('path');
const { writeFileSync } = require('fs');
const extractWMSRequirementsSheetDataScript = require('./transaction-scripts/extractWMSRequirementsSheetDataScript');
const parseSheetsIntoArraysOfArrays = require('./transaction-scripts/parseSheetsIntoArraysOfArrays');
const extractTestPlansSheetDataScript = require('./transaction-scripts/extractTestPlansSheetDataScript');

const INPUT_FOLDER = path.join(__dirname, '..', 'in');
const OUT_FOLDER = path.join(__dirname, '..', 'out');
const SHEET_PATH = path.join(INPUT_FOLDER, 'raw.xlsx');

const arrayOfArraySheets = parseSheetsIntoArraysOfArrays(SHEET_PATH);

const extractWMSRequirementsDataResult =
  extractWMSRequirementsSheetDataScript(arrayOfArraySheets);

const extractTestPlansResults =
  extractTestPlansSheetDataScript(arrayOfArraySheets);

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
