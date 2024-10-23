class RequirementWithTests {
  /**
   * @param {String} params.globalId Global ID
   * @param {String} params.requirementId Requirement ID
   * @param {String} params.name Requirement name
   * @param {String} params.text Requirement text
   * @param {Array<RequirementWithTests>} params.childRequirements Child requirements
   * @param {Array<TestCase>} params.testCases Test cases
   */
  constructor(params) {
    this.globalId = params.globalId;
    this.requirementId = params.requirementId;
    this.name = params.name;
    this.text = params.text;
    this.testCases = params.testCases || [];
  }

  toMarkdown() {
    let md = '';

    md += `# ${this.name}\n\n`;
    md += `${this.text}\n\n`;
    md += this.testCases.map((testCase) => testCase.toMarkdown()).join('\n\n');

    return md;
  }
}

module.exports = RequirementWithTests;
