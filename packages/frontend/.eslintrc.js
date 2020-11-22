module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  ignorePatterns: ['/node_modules', '*.css'],
}
