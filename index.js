const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/**
 * @param {object} config
 * @param {any[]} config.plugins
 */
function rewireLodashPlugin(config, env, lodashPluginOptions = {}) {
  // Add the Lodash plugin to the list of plugins
  config.plugins = (config.plugins || []).concat([
    new LodashModuleReplacementPlugin(lodashPluginOptions)
  ]);

  return config;
}

module.exports = rewireLodashPlugin;
