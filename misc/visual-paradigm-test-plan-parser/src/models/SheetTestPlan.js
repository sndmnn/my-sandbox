class SheetTestPlanStep {
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

class SheetTestPlan {
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
  SheetTestPlanStep,
  SheetTestPlan,
};
