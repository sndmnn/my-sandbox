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

class TestCase {
  /**
   * @param {String} params.globalId Global ID
   * @param {String} params.name Test case name
   * @param {String} params.description Test case description
   * @param {Array<TestPlanStep>} params.steps Test case steps
   */
  constructor(params) {
    this.globalId = params.globalId;
    this.name = params.name;
    this.description = params.description;
    this.steps = params.steps || [];
  }
}

module.exports = {
  TestPlanStep,
  TestCase,
};
