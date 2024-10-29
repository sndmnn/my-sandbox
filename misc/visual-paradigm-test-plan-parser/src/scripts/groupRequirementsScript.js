const RequirementWithTests = require('../models/RequirementWithTests');

/**
 * Iterates over a list of requirements and groups them by their `group` field.
 *
 * @param {RequirementWithTests[]} requirements
 * @returns {Object.<string, RequirementWithTests[]>} An object where the keys are the group names and the values are the requirements that belong to that group
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
