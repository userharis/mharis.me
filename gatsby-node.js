module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type projectsJson implements Node {
      image: File!
    }
  `;

  createTypes(typeDefs);
};
