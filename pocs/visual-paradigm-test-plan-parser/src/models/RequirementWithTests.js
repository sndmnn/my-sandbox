const { TestCase } = require('./TestCase');

class RequirementWithTests {
  /**
   * @param {String} params.globalId Global ID
   * @param {String} params.requirementId Requirement ID
   * @param {String} params.name Requirement name
   * @param {String} params.text Requirement text
   * @param {String} params.group Requirement group
   * @param {number} params.order Requirement sort order
   * @param {Array<TestCase>} params.testCases Test cases
   */
  constructor(params) {
    this.globalId = params.globalId;
    this.requirementId = params.requirementId;
    this.name = params.name;
    this.text = params.text;
    this.group = params.group;
    this.order = params.order;
    this.testCases = params.testCases || [];
  }
}

module.exports = RequirementWithTests;
