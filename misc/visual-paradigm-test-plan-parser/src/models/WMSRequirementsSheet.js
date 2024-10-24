const SimpleSheet = require('./SimpleSheet');
const SheetRequirement = require('./SheetRequirement');
const TestCase = require('./SheetTestCase');
const VerifyRelation = require('./VerifyRelation');
const DeriveRelation = require('./DeriveRelation');
const Note = require('./Note');
const AnchorRelation = require('./AnchorRelation');

const headerMap = {
  'What': 0,
  'ID': 1,
  'Name': 2,
  'Type': 3,
  'Description': 4,
  'Parent Model': 5,
  'Model ID': 6,
  'Stereotypes': 7,
  'Model': 8,
  'Transit From': 9,
  'Transit To': 10,
  'Visibility': 11,
  'Abstract': 12,
  'Leaf': 13,
  'Root': 14,
  'From': 15,
  'To': 16,
  'Parent User ID': 17,
  'Requirement_Text': 18,
  'Requirement_ID': 19,
  'Requirement_source': 20,
  'Requirement_kind': 21,
  'Requirement_verifyMethod': 22,
  'Requirement_risk': 23,
  'Requirement_status': 24,
  'Tagged_Value_group': 25,
  'Diagram ID': 26,
  'Diagram Name': 27,
  'Parent ID': 28,
  'Parent Name': 29,
  'Delete ?': 30,
};

module.exports = class WMSRequirementsSheet extends SimpleSheet {
  constructor(content) {
    super(headerMap, content);
  }

  extractData() {
    const data = {
      requirements: [],
      testCases: [],
      verifyRelations: [],
      deriveRelations: [],
      notes: [],
      anchorRelations: [],
      packages: [],
    };

    for (let i = 1; i < this.content.length; i++) {
      const what = this.getCellValue(i, 'What');

      switch (what) {
        case 'Requirement':
          data.requirements.push(this._rowToRequirement(i));
          break;
        case 'TestCase':
          data.testCases.push(this._rowToTestCase(i));
          break;
        case 'Verify':
          data.verifyRelations.push(this._rowToVerifyRelation(i));
          break;
        case 'RequirementDerive':
          data.deriveRelations.push(this._rowToDeriveRelation(i));
          break;
        case 'NOTE':
          data.notes.push(this._rowToNote(i));
          break;
        case 'Anchor':
          data.anchorRelations.push(this._rowToAnchorRelation(i));
          break;
      }
    }

    return data;
  }

  _rowToRequirement(row) {
    return new SheetRequirement({
      id: this.getCellValue(row, 'ID'),
      name: this.getCellValue(row, 'Name'),
      text: this.getCellValue(row, 'Requirement_Text'),
      status: this.getCellValue(row, 'Requirement_status'),
      requirementId: this.getCellValue(row, 'Requirement_ID'),
      parentId: this.getCellValue(row, 'Parent ID'),
      group: this.getCellValue(row, 'Tagged_Value_group'),
    });
  }

  _rowToTestCase(row) {
    return new TestCase({
      id: this.getCellValue(row, 'ID'),
      name: this.getCellValue(row, 'Name'),
      description: this.getCellValue(row, 'Description'),
    });
  }

  _rowToNote(row) {
    return new Note({
      id: this.getCellValue(row, 'ID'),
      description: this.getCellValue(row, 'Description'),
      stereotypes: this.getCellValue(row, 'Stereotypes'),
    });
  }

  _rowToVerifyRelation(row) {
    return new VerifyRelation({
      id: this.getCellValue(row, 'ID'),
      from: this.getCellValue(row, 'From'),
      to: this.getCellValue(row, 'To'),
    });
  }

  _rowToDeriveRelation(row) {
    return new DeriveRelation({
      id: this.getCellValue(row, 'ID'),
      from: this.getCellValue(row, 'From'),
      to: this.getCellValue(row, 'To'),
    });
  }

  _rowToAnchorRelation(row) {
    return new AnchorRelation({
      id: this.getCellValue(row, 'ID'),
      from: this.getCellValue(row, 'From'),
      to: this.getCellValue(row, 'To'),
    });
  }
};
