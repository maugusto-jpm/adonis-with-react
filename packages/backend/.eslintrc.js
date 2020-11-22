module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: [
    '/node_modules',
    '/build',
    '/tmp',
    '/.DS_STORE',
    '/coverage',
    '/.nyc_output',
    '/public',
    'resources/views',
    'ace',
  ],
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
  ignorePatterns: ['/node_modules', '/public/frontend', '/tmp'],
}
