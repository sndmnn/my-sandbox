class AnchorRelation {
  /**
   * @param {String} params.id Global ID
   * @param {String} params.from Note Global ID
   * @param {String} params.to Requirement Global ID
   */
  constructor(params) {
    this.id = params.id;
    this.from = params.from;
    this.to = params.to;
  }
}

module.exports = AnchorRelation;
