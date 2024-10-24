const { writeFileSync } = require('fs');
const { join } = require('path');
const RequirementWithTests = require('../models/RequirementWithTests');
const { HTMLTransformer } = require('../transformers');
const { OUTPUT_FOLDER } = require('../config');

/**
 * @param {RequirementWithTests[]} requirements
 */
function transformRequirementsListIntoHTMLFile(requirements) {
  const requirementsHTML = HTMLTransformer.requirementsToHTML(requirements);

  writeFileSync(join(OUTPUT_FOLDER, 'requirements.html'), requirementsHTML);
}

module.exports = transformRequirementsListIntoHTMLFile;
