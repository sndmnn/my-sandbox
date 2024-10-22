class TestCase {
  /**
   * @param {String} params.id Global ID
   * @param {String} params.name Test case name
   * @param {String} params.description Test case description
   */
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
  }
}

module.exports = TestCase;
