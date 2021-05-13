const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/pages/404.js"))),
  "component---src-pages-faq-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/pages/faq.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/pages/login.js"))),
  "component---src-pages-order-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/pages/order.js"))),
  "component---src-templates-policy-page-js": hot(preferDefault(require("/Users/philbrew/Documents/repos/nlrs-dog/gatsby/src/templates/PolicyPage.js")))
}

