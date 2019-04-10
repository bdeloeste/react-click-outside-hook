module.exports = {
  use: [
    [
      '@neutrinojs/airbnb',
      {
        eslint: {
          plugins: ['react-hooks'],
          rules: {
            semi: ['off'],
            'import/prefer-default-export': ['off'],
            'import/no-extraneous-dependencies': ['off'],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react/prop-types': ['off'],
            'react/no-unused-prop-types': ['off'],
            'react/forbid-prop-types': ['off'],
            'react/require-default-props': ['off'],
            'consistent-return': 0,
          },
        },
      },
    ],
    '@neutrinojs/react-components',
    [
      '@neutrinojs/jest',
      {
        setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js',
        coveragePathIgnorePatterns: [
          '/node_modules/',
          '/src/demo/',
          '/src/index.jsx',
        ],
      },
    ],
  ],
}
