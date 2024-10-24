const path = require('path');
const Handlebars = require('handlebars');
const { readFileSync } = require('fs');
const RequirementWithTests = require('../models/RequirementWithTests');

const REQUIREMENTS_TEMPLATE_PATH = path.join(
  __dirname,
  'templates',
  'requirements.hbs'
);

class HandlebarsHTMLTransformer {
  /**
   * @param {RequirementWithTests[]} requirements
   */
  static requirementsToHTML(requirements) {
    Handlebars.registerHelper('brSlashN', function (someString) {
      const htmlResult = someString
        .split(/\n/)
        .map((line) => Handlebars.Utils.escapeExpression(line))
        .join('<br>');
      return new Handlebars.SafeString(htmlResult);
    });

    const templateContent = readFileSync(REQUIREMENTS_TEMPLATE_PATH, 'utf8');
    const fillTemplate = Handlebars.compile(templateContent);

    return fillTemplate({ requirements });
  }
}

module.exports = HandlebarsHTMLTransformer;
