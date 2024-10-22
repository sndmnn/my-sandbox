const WMSRequirementsSheet = require('../sheet-models/WMSRequirementsSheet');
const SheetNames = require('../sheet-models/SheetNames');

/**
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
