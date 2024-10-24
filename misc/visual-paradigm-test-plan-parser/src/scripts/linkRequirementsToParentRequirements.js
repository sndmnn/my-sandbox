const DeriveRelation = require('../models/DeriveRelation');
const RequirementWithTests = require('../models/RequirementWithTests');
const SheetRequirement = require('../models/SheetRequirement');

class RequirementNode {
  /**
   * @param {RequirementNode} parent
   * @param {RequirementNode[]} children
   * @param {RequirementWithTests} requirement
   */
  constructor(requirement) {
    this.parent = null;
    this.children = [];
    this.requirement = requirement;
  }
}

/**
 * @param {SheetRequirement[]} sheetRequirements
 * @param {RequirementWithTests[]} requirements
 * @param {DeriveRelation[]} deriveRelations
 * @returns {RequirementNode[]} nodes
 */
function createDoublyLinkedList(
  sheetRequirements,
  requirements,
  deriveRelations
) {
  const nodes = [];

  for (let i = 0; i < requirements.length; ++i) {
    nodes.push(new RequirementNode(requirements[i]));
  }

  // Find the parent node for each node
  for (let i = 0; i < sheetRequirements.length; ++i) {
    const sheetRequirement = sheetRequirements[i];

    if (sheetRequirement.parentId) {
      const thisNode = nodes.find(
        (n) => n.requirement.globalId === sheetRequirement.id
      );

      const parentNode = nodes.find(
        (n) =>
          // There's no particular logic to this, it's just a
          // pattern I noticed in the sheet data. This is not
          // reliable.
          String(Number(n.requirement.globalId) + 1) ===
          sheetRequirement.parentId
      );

      if (typeof parentNode !== 'undefined') {
        thisNode.parent = parentNode;
        parentNode.children.push(thisNode);
      }
    }
  }

  // Link derived requirements
  for (let i = 0; i < deriveRelations.length; ++i) {
    const relation = deriveRelations[i];

    const fromNode = nodes.find(
      (n) => n.requirement.globalId === relation.from
    );

    const toNode = nodes.find((n) => n.requirement.globalId === relation.to);

    if (typeof fromNode !== 'undefined' && typeof toNode !== 'undefined') {
      fromNode.children.push(toNode);
      toNode.parent = fromNode;
    }
  }

  return nodes;
}

/**
 * -- Important note --
 *
 * There's no way to reliably link requirements to parents because
 * the Visual Paradigm seems to do some fuckery with the parent IDs of
 * requirements specifically. Some of them straight up don't exist in
 * the sheet and I can't figure out why. The derive relations seem fine
 * though.
 *
 * The only other way to relate parent/child requirements is using the
 * parent name, which seems to be accurate on the sheet, but are not
 * guaranteed to be unique.
 *
 * --------------------------------------------------------------------
 *
 * Links requirements to parent requirements based on parent IDs and
 * derive relations.
 *
 * @param {SheetRequirement[]} sheetRequirements
 * @param {RequirementWithTests[]} requirements
 * @returns {RequirementNode[]} linked requirements
 */
function linkRequirementsToParentRequirementsScript(
  sheetRequirements,
  requirements,
  deriveRelations
) {
  const nodes = createDoublyLinkedList(
    sheetRequirements,
    requirements,
    deriveRelations
  );

  return nodes;
}

module.exports = linkRequirementsToParentRequirementsScript;
