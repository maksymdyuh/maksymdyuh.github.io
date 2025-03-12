export default {
  // Jest configuration for ESM
  // Test root directory configuration
  roots: ["<rootDir>/tests"],
  
  // Configure babel-jest for transforming JS files
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  
  // Use Node.js as the test environment
  testEnvironment: 'node',
  
  // Required for Jest's ESM support
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  
  // Required when using "type": "module" in package.json
  transformIgnorePatterns: [
    '/node_modules/(?!.*\\.js$)'
  ],
  
  // For proper ESM/CJS interoperability
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  // Coverage settings
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
