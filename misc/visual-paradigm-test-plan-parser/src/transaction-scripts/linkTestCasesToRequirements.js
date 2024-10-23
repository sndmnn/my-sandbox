const Requirement = require('../models/Requirement');
const { TestCase } = require('../models/TestCase');
const SheetRequirement = require('../sheet-models/SheetRequirement');
const VerifyRelation = require('../sheet-models/VerifyRelation');

/**
 * @param {TestCase[]} testCases
 * @param {VerifyRelation[]} verifyRelations
 * @param {SheetRequirement[]} requirements
 * @returns {Requirement[]} Linked requirements
 */
function linkTestCasesToRequirements(testCases, verifyRelations, requirements) {
  let linkedRequirements = {};

  for (let i = 0; i < verifyRelations.length; i++) {
    const verifyRelation = verifyRelations[i];

    const foundRequirement = requirements.find(
      (requirement) => requirement.id === verifyRelation.to
    );
    const foundTestCase = testCases.find(
      (testCase) => testCase.globalId === verifyRelation.from
    );

    if (
      typeof foundRequirement !== 'undefined' &&
      typeof foundTestCase !== 'undefined'
    ) {
      if (typeof linkedRequirements[foundRequirement.id] === 'undefined') {
        const newRequirement = new Requirement({
          globalId: foundRequirement.id,
          requirementId: foundRequirement.requirementId,
          name: foundRequirement.name,
          text: foundRequirement.text,
          childRequirements: [],
          testCases: [foundTestCase],
        });

        linkedRequirements[foundRequirement.id] = newRequirement;
      } else {
        linkedRequirements[foundRequirement.id].testCases.push(foundTestCase);
      }
    }
  }

  return Object.values(linkedRequirements);
}

module.exports = linkTestCasesToRequirements;
