import dotenv from "dotenv";

dotenv.config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: "The Wonderful World of Dogs",
    siteUrl: "https://thewonderfulworldofdogs.co.uk/",
    description: "The wonderful world of dogs | dog exercise | dog walking",
    author: "Phil Brew",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity", // Plugin name
      options: {
        projectId: "fm755ymi",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
