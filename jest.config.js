module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest-setup.js'],
  moduleNameMapper:{
    '\\.(css|less)$': './__mocks__/styleMock.js',
  }
};
