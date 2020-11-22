if (!!!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
  process.env.BABEL_ENV = 'development'
}

process.on('unhandledRejection', err => {
  throw err
})

require('react-scripts/config/env')
const path = require('path')
const fs = require('fs-extra')
const paths = require('react-scripts/config/paths')
const mockRequire = require('mock-require')

process.env.INLINE_RUNTIME_CHUNK = false
const appBuild = path.resolve(__dirname, '../public/frontend')
const appHtml = path.resolve(__dirname, './public/index.html')
const entryFile = path.resolve(__dirname, './src/index.tsx')
const appPublic = path.resolve(__dirname, './public')
const resultHtmlFile = path.resolve(appBuild, './index.html')
const adonisFrontendBootstrap = path.resolve(__dirname, '../resources/views/frontend.edge')
const publicUrlOrPath = '/frontend/'

mockRequire('react-scripts/config/paths', {
  ...paths,
  appBuild,
  publicUrlOrPath,
})

const configFactory = require('react-scripts/config/webpack.config')
const config = configFactory('production')
mockRequire.stopAll()

module.exports = {
  ...config,

  entry: [entryFile],

  output: {
    ...config.output,

    path: appBuild,
  },

  plugins: [
    ...config.plugins,

    {
      apply: compiler => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
          fs.moveSync(resultHtmlFile, adonisFrontendBootstrap, { overwrite: true })
          fs.copySync(appPublic, appBuild, { dereference: true, filter: file => file !== appHtml })
        })
      },
    },
  ],
}
