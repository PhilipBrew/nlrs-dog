import path from 'path';

const turnUsersIntoPages = async ({ graphql, actions }) => {
  const userTemplate = path.resolve('./src/templates/SingleUser.js');
  const { data } = await graphql(`
    query {
      allSanityUsers {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const {
    allSanityUsers: { nodes: users },
  } = data;

  users.forEach(({ slug }) => {
    actions.createPage({
      path: `user/${slug.current}`,
      component: userTemplate,
      context: {
        slug: slug.current,
      },
    });
  });
};

const turnPoliciesIntoPages = async ({ graphql, actions }) => {
  const policyTemplate = path.resolve('./src/templates/PolicyPage.js');
  const pages = ['terms-Conditions', 'privacy-policy', 'cookie-policy'];
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
  await Promise.all([
    turnUsersIntoPages(params),
    turnPoliciesIntoPages(params),
  ]);
};
