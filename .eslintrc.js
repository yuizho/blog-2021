module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next', 'next/core-web-vitals', 'airbnb', 'prettier'],
  ignorePatterns: ['pages/_app.tsx', '*.stories.*'],
  rules: {
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
