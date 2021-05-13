// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-faq-js": () => import("./../../../src/pages/faq.js" /* webpackChunkName: "component---src-pages-faq-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-login-js": () => import("./../../../src/pages/login.js" /* webpackChunkName: "component---src-pages-login-js" */),
  "component---src-pages-order-js": () => import("./../../../src/pages/order.js" /* webpackChunkName: "component---src-pages-order-js" */),
  "component---src-templates-policy-page-js": () => import("./../../../src/templates/PolicyPage.js" /* webpackChunkName: "component---src-templates-policy-page-js" */)
}

