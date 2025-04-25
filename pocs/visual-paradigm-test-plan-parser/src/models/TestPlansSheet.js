const { SheetTestPlan, SheetTestPlanStep } = require('./SheetTestPlan');

class TestPlansSheet {
  constructor(content) {
    this.content = content;
  }

  extractData() {
    /**
     * @type {{ testPlans: TestPlan[] }}
     */
    const data = {
      testPlans: [],
    };

    let whatIsNext = 'unknown';

    for (let row = 0; row < this.content.length; row++) {
      if (this.content[row][0] === 'ID' && this.content[row][1] === 'Name') {
        whatIsNext = 'testCaseIdAndName';
        continue;
      } else if (
        this.content[row][0] === 'Steps' &&
        this.content[row][1] === 'Procedures' &&
        this.content[row][2] === 'Expected Results'
      ) {
        whatIsNext = 'testPlanStep';
        continue;
      }
      // An empty row means that the test plan has ended, and we can't
      // assume what is next, so we set it to unknown
      else if (
        this.content[row][0] === '' &&
        this.content[row][1] === '' &&
        this.content[row][2] === ''
      ) {
        whatIsNext = 'unknown';
        continue;
      }

      if (whatIsNext === 'testCaseIdAndName') {
        const testPlan = new SheetTestPlan({
          id: this.content[row][0],
          name: this.content[row][1],
        });

        data.testPlans.push(testPlan);
      } else if (whatIsNext === 'testPlanStep') {
        const testPlanStep = new SheetTestPlanStep({
          step: this.content[row][0],
          procedure: this.content[row][1],
          expectedResult: this.content[row][2],
        });

        data.testPlans[data.testPlans.length - 1].addStep(testPlanStep);
      }
    }

    return data;
  }
}

module.exports = TestPlansSheet;
