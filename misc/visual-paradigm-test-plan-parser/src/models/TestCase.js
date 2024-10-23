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

  toMarkdown() {
    let md = '';

    md += `## ${this.name}\n\n`;
    md += `${this.description}`;

    if (this.steps.length > 0) {
      md += '\n\n';
    }

    this.steps.forEach((step) => {
      md += `### ${step.step}\n\n`;

      if (step.procedure) {
        md += `**Procedure:**\n\n${step.procedure}\n\n`;
      }
      if (step.expectedResult) {
        md += `**Expected Result:**\n\n${step.expectedResult}\n\n`;
      }
    });

    return md;
  }
}

module.exports = {
  TestPlanStep,
  TestCase,
};
