class Note {
  /**
   * @param {String} params.id Global ID
   * @param {String} params.description Note description
   * @param {String} params.stereotypes Note stereotypes
   */
  constructor(params) {
    this.id = params.id;
    this.description = params.description;
    this.stereotypes = params.stereotypes;
  }
}

module.exports = Note;
