const RequirementWithTests = require('../models/RequirementWithTests');
const { TestCase, TestPlanStep } = require('../models/TestCase');
const SheetRequirement = require('../models/SheetRequirement');
const VerifyRelation = require('../models/VerifyRelation');

/**
 * @param {TestCase[]} testCases
 * @param {VerifyRelation[]} verifyRelations
 * @param {SheetRequirement[]} sheetRequirements
 * @returns {RequirementWithTests[]} Linked requirements
 */
function linkTestCasesToRequirements(
  testCases,
  verifyRelations,
  sheetRequirements
) {
  let linkedRequirements = {};

  for (let i = 0; i < sheetRequirements.length; i++) {
    const sheetRequirement = sheetRequirements[i];

    linkedRequirements[sheetRequirement.id] = new RequirementWithTests({
      globalId: sheetRequirement.id,
      requirementId: sheetRequirement.requirementId,
      name: sheetRequirement.name,
      text: sheetRequirement.text,
      childRequirements: [],
      testCases: [],
    });

    const verifyRelation = verifyRelations.find(
      (verifyRelation) => verifyRelation.to === sheetRequirement.id
    );

    if (typeof verifyRelation === 'undefined') continue;

    const foundTestCase = testCases.find(
      (testCase) => testCase.globalId === verifyRelation.from
    );

    if (typeof foundTestCase !== 'undefined') {
      linkedRequirements[sheetRequirement.id].testCases.push(
        new TestCase({
          globalId: foundTestCase.globalId,
          name: foundTestCase.name,
          description: foundTestCase.description,
          steps: foundTestCase.steps.map(
            (step) =>
              new TestPlanStep({
                step: step.step,
                procedure: step.procedure,
                expectedResult: step.expectedResult,
              })
          ),
        })
      );
    }
  }

  return Object.values(linkedRequirements);
}

module.exports = linkTestCasesToRequirements;
