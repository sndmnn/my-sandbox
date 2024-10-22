const SimpleSheet = require('./SimpleSheet');
const Requirement = require('./Requirement');
const TestCase = require('./TestCase');
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
  'From': 11,
  'To': 12,
  'Supplier': 13,
  'Client': 14,
  'Visibility': 15,
  'Parent User ID': 16,
  'Requirement_Text': 17,
  'Requirement_ID': 18,
  'Requirement_source': 19,
  'Requirement_kind': 20,
  'Requirement_verifyMethod': 21,
  'Requirement_risk': 22,
  'Requirement_status': 23,
  'Diagram ID': 24,
  'Diagram Name': 25,
  'Parent ID': 26,
  'Parent Name': 27,
  'Delete ?': 28,
};

module.exports = class WMSRequirementsSheet extends SimpleSheet {
  constructor(content) {
    super(headerMap, content);
  }

  // extractRequirements() {
  //   const requirements = [];

  //   for (let i = 1; i < this.content.length; i++) {
  //     const what = this.getCellValue(i, 'What');

  //     if (what !== 'Requirement') continue;

  //     requirements.push(
  //       new Requirement({
  //         id: this.getCellValue(i, 'ID'),
  //         name: this.getCellValue(i, 'Name'),
  //         text: this.getCellValue(i, 'Requirement_Text'),
  //         status: this.getCellValue(i, 'Requirement_status'),
  //         requirementId: this.getCellValue(i, 'Requirement_ID'),
  //         parentId: this.getCellValue(i, 'Parent User ID'),
  //       })
  //     );
  //   }

  //   return requirements;
  // }

  // extractTestCases() {
  //   const testCases = [];

  //   for (let i = 1; i < this.content.length; i++) {
  //     const what = this.getCellValue(i, 'What');

  //     if (what !== 'TestCase') continue;

  //     testCases.push(
  //       new TestCase({
  //         id: this.getCellValue(i, 'ID'),
  //         name: this.getCellValue(i, 'Name'),
  //         description: this.getCellValue(i, 'Description'),
  //       })
  //     );
  //   }

  //   return testCases;
  // }

  // extractVerifyRelations() {
  //   const verifyRelations = [];

  //   for (let i = 1; i < this.content.length; i++) {
  //     const what = this.getCellValue(i, 'What');

  //     if (what !== 'Verify') continue;

  //     verifyRelations.push({
  //       id: this.getCellValue(i, 'ID'),
  //       from: this.getCellValue(i, 'From'),
  //       to: this.getCellValue(i, 'To'),
  //     });
  //   }

  //   return verifyRelations;
  // }

  extractData() {
    const data = {
      requirements: [],
      testCases: [],
      verifyRelations: [],
      deriveRelations: [],
      notes: [],
      anchorRelations: [],
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
    return new Requirement({
      id: this.getCellValue(row, 'ID'),
      name: this.getCellValue(row, 'Name'),
      text: this.getCellValue(row, 'Requirement_Text'),
      status: this.getCellValue(row, 'Requirement_status'),
      requirementId: this.getCellValue(row, 'Requirement_ID'),
      parentId: this.getCellValue(row, 'Parent User ID'),
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
