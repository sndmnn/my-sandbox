const WMSRequirementsSheet = require('../models/WMSRequirementsSheet');
const SheetNames = require('../models/SheetNames');

/**
 * Extracts data from the WMS Requirements sheet and transforms it into
 * domain models.
 *
 * @param {String[][]} arrayOfArraysSheets Array of arrays that represents the content of the sheets
 */
function extractWMSRequirementsSheetDataScript(arrayOfArraySheets) {
  const wmsRequirementSheet = new WMSRequirementsSheet(
    arrayOfArraySheets[SheetNames.WMS_REQUIREMENTS].splice(1)
  );

  const result = wmsRequirementSheet.extractData();

  return result;
}

module.exports = extractWMSRequirementsSheetDataScript;
