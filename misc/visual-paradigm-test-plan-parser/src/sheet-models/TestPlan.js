class TestPlanStep {
  /**
   * @param {String} params.step
   * @param {String} params.procedure
   * @param {String} params.expectedResult
   */
  constructor(params) {
    this.step = params.step;
    this.procedure = params.procedure;
    this.expectedResult = params.expectedResult;
  }
}

class TestPlan {
  /**
   * @param {String} params.id Test Case Global ID
   * @param {String} params.name Test Case Name
   */
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.steps = [];
  }

  addStep(step) {
    this.steps.push(step);
  }
}

module.exports = {
  TestPlanStep,
  TestPlan,
};
