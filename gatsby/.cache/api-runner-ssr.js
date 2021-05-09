var plugins = [{
      plugin: require('/Users/philbrew/Documents/repos/nlrs-dog/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/philbrew/Documents/repos/nlrs-dog/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/philbrew/Documents/repos/nlrs-dog/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"fm755ymi","dataset":"production","watchMode":true,"token":"sktbGHLcM4VDQpOHsVk72im0ei66ixF5VMHeVi85MocbsvkvBUAR53ekUSLRe2GXQFkiNxcWk3eVhkQmrz4dohmo59Q6Dt0gohYnpwOvhqI4gX3LGSX8kr6MUEqVx7BHnTHZ5fxVyY8PZMVN43VbyPnb6U9wii9xo0h2llus5aciSe3Y2Yj1"},
    },{
      plugin: require('/Users/philbrew/Documents/repos/nlrs-dog/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
