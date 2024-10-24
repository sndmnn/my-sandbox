const RequirementWithTests = require('../models/RequirementWithTests');
const { HTMLTransformer } = require('../transformers');

/**
 * Transforms a list of requirements into an HTML file
 *
 * @param {RequirementWithTests[]} requirements
 */
function transformRequirementsListIntoHTMLFile(requirements) {
  const requirementsHTML = HTMLTransformer.requirementsToHTML(requirements);
  return requirementsHTML;
}

module.exports = transformRequirementsListIntoHTMLFile;
