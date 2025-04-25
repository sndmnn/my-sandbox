const { TestCase } = require('../models/TestCase');
const { SheetTestPlan: TestPlan } = require('../models/SheetTestPlan');

/**
 * Link test plans to test cases
 *
 * @param {TestPlan[]} testPlans
 * @param {TestCase[]} testCases
 * @returns
 */
function linkTestPlansToTestCasesScript(testPlans, testCases) {
  let linkedTestCases = [];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const foundTestPlans = testPlans.find(
      (testPlan) => testPlan.id === testCase.id
    );

    linkedTestCases.push(
      new TestCase({
        globalId: testCase.id,
        name: testCase.name,
        description: testCase.description,
        steps:
          typeof foundTestPlans !== 'undefined' ? foundTestPlans.steps : [],
      })
    );
  }

  return linkedTestCases;
}

module.exports = linkTestPlansToTestCasesScript;
