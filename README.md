# react-app-rewire-lodash-plugin

With ReactJS

Add [`lodash-webpack-plugin`](https://github.com/lodash/lodash-webpack-plugin) to a [`react-app-rewired`](https://github.com/timarney/react-app-rewired) config.

```js
const rewireLodashPlugin = require('react-app-rewire-lodash-plugin');

// Add lodash support
config = rewireLodashPlugin(config, env, {
  collections: true,
  paths: true
});
```
