module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
  globalSetup: '@shopify/react-native-skia/globalJestSetup.js',
  setupFiles: ['@shopify/react-native-skia/jestSetup.js'],
};
