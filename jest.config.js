module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  
  // Test file patterns
  testMatch: ['**/__tests__/**/*.test.js'],
  
  // Coverage collection patterns
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/__tests__/**'
  ],
  
  // Verbose output for better debugging
  verbose: true
}; 