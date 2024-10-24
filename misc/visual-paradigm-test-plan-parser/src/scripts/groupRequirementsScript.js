const RequirementWithTests = require('../models/RequirementWithTests');

/**
 * @param {RequirementWithTests[]} requirements
 */
function groupRequirementsScript(requirements) {
  const groupedRequirements = {};

  for (let i = 0; i < requirements.length; i++) {
    const requirement = requirements[i];

    if (!groupedRequirements[requirement.group]) {
      groupedRequirements[requirement.group] = [requirement];
    } else {
      groupedRequirements[requirement.group].push(requirement);
    }
  }

  return groupedRequirements;
}

module.exports = groupRequirementsScript;
