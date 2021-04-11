module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/{pages,containers}/**/*.{js,jsx}',
    '<rootDir>/components/**/*.{js,jsx}',
    '!<rootDir>/pages/_app.jsx',
    '!<rootDir>/pages/_document.jsx',
    '!<rootDir>/pages/api/**',
    '!<rootDir>/components/index.js',
    '!<rootDir>/{hooks,helpers,contexts,config,lib,utils}/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  coverageReporters: ['html', 'text'],
}
