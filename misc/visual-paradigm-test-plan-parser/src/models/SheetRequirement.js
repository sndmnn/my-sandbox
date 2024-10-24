class SheetRequirement {
  /**
   * @param {String} params.id Global ID
   * @param {String} params.name Requirement name
   * @param {String} params.text Requirement text
   * @param {String} params.status Requirement status
   * @param {String} params.requirementId Requirement ID
   * @param {String} params.parentId Parent `requirementId`
   * @param {String} params.group Requirement group
   */
  constructor(params) {
    this.id = params.id;
    this.name = params.name;
    this.text = params.text;
    this.status = params.status;
    this.requirementId = params.requirementId;
    this.parentId = params.parentId;
    this.group = params.group;
  }
}

module.exports = SheetRequirement;
