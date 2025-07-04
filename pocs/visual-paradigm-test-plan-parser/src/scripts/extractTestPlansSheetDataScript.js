const TestPlansSheet = require('../models/TestPlansSheet');
const SheetNames = require('../models/SheetNames');

/**
 * Extracts data from the Test Plans sheet and transforms it into
 * domain models.
 *
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
