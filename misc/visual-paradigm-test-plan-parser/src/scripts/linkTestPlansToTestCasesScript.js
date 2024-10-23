const { TestCase } = require('../models/TestCase');

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
