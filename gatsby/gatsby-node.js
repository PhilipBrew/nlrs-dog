import path from "path";

const turnPoliciesIntoPages = async ({ graphql, actions }) => {
  const policyTemplate = path.resolve("./src/templates/PolicyPage.js");
  const pages = ["terms-Conditions", "privacy-policy", "cookie-policy"];
  pages.forEach((page) => {
    actions.createPage({
      path: page,
      component: policyTemplate,
      context: {
        page,
      },
    });
  });
};

export const createPages = async (params) => {
  await Promise.all([turnPoliciesIntoPages(params)]);
};
