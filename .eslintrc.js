module.exports = {
  extends: ['react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    'jsx-a11y/accessible-emoji': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
