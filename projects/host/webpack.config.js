const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpack = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

})

console.log(webpack)

const removeResolve = {
  ...webpack,
  resolve:{}
}

console.log(removeResolve)

module.exports = removeResolve

