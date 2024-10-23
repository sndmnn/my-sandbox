const XLSX = require('xlsx');
const CSV = require('csv-parse/sync');
const SheetNames = require('../models/SheetNames');

function parseSheetsIntoArraysOfArrays(sheetPath) {
  const workbook = XLSX.readFile(sheetPath);

  const csvStringSheets = {};

  csvStringSheets[SheetNames.WMS_REQUIREMENTS] = XLSX.utils.sheet_to_csv(
    workbook.Sheets[SheetNames.WMS_REQUIREMENTS],
    {
      forceQuotes: true,
    }
  );

  csvStringSheets[SheetNames.TEST_PLANS] = XLSX.utils.sheet_to_csv(
    workbook.Sheets[SheetNames.TEST_PLANS],
    {
      forceQuotes: true,
    }
  );

  const arrayOfArraySheets = {};

  arrayOfArraySheets[SheetNames.WMS_REQUIREMENTS] = CSV.parse(
    csvStringSheets[SheetNames.WMS_REQUIREMENTS]
  );

  arrayOfArraySheets[SheetNames.TEST_PLANS] = CSV.parse(
    csvStringSheets[SheetNames.TEST_PLANS]
  );

  return arrayOfArraySheets;
}

module.exports = parseSheetsIntoArraysOfArrays;
