import dotenv from "dotenv";
dotenv.config();

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
});

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  server: {
    host: "0", // default: localhost
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/app.scss"],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/contentful", "~/plugins/posts"],
  /*
   ** Environment variables
   */
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESSTOKEN: process.env.CONTENTFUL_ACCESSTOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    GTAG: process.env.GTAG,
  },
  modules: ["@nuxtjs/markdownit", "@nuxtjs/google-gtag"],
  markdownit: {
    html: true,
    injected: true,
  },
  "google-gtag": {
    id: process.env.GTAG,
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: true, // disable if you don't want to track each page route with router.afterEach(...).
  },
  generate: {
    routes() {
      return Promise.all([
        client.getEntries({
          content_type: "blogPost",
        }),
      ]).then(([blogEntries]) => {
        return [...blogEntries.items.map((entry) => entry.fields.slug)];
      });
    },
  },
  build: {
    publicPath: "https://d1ry54sodxci8i.cloudfront.net",
  },
};
