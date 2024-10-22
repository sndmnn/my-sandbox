const TestPlansSheet = require('../sheet-models/TestPlansSheet');
const SheetNames = require('../sheet-models/SheetNames');

/**
 * @param {String[][]} arrayOfArraysSheets Array of arrays that represents the content of the sheets
 */
function extractTestPlansSheetDataScript(arrayOfArraySheets) {
  const testPlansSheet = new TestPlansSheet(
    arrayOfArraySheets[SheetNames.TEST_PLANS]
  );

  const result = testPlansSheet.extractData();

  return result;
}

module.exports = extractTestPlansSheetDataScript;
