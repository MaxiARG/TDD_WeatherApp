module.exports = {
  preset: 'react-native',
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  setupFilesAfterEnv: ['./jest-setup.js'],
  // moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper:{
    '\\.(css|less)$': './__mocks__/styleMock.js',
  },
  transformIgnorePatterns: ["node_modules/(?!((jest-)?react-native|@react-navigation/native-stack|tailwindcss|react-native-screens|nativewind|moment|react-native-safe-area-context|@react-navigation|react-native-linear-gradient|react-native-reanimated|react-native-geture-handler|react-native-get-location|@react-native(-community)?)/)"], 
  // transformIgnorePatterns: [
  //   'node_modules/(?!(jest-))?react-native|@react-native-community|@react-navigation/native-stack|tailwindcss|react-native-screens|nativewind|moment|react-native-safe-area-context|@react-navigation|react-native-linear-gradient|react-native-reanimated|react-native-geture-handler|react-native-get-location|'
  // ],
};


// You are using the transformIgnorePatterns option to tell Babel to ignore some modules. But this option only works for the default transformer, which is babel-jest. If you are using a different transformer, like ts-jest, you need to use the transformerConfig option to pass the ignore patterns to it.

// transformIgnorePatterns: [
//   'node_modules/(?!(jest-)?react-native' +
//     '|@react-native-community' +
//     '|@react-navigation' +
//     '|native-base' +
//     '|@expo(nent)?/.*' +
//     '|expo-.*/.*' +
//     '|@unimodules' +
//     '|@codler/react-native-keyboard-aware-scroll-view' +
//     '|@react-native-picker' +
//     '|victory-.*/.*' +
//     '/)'
// ]


// jest.config.js 
// module.exports = {
//   preset: 'react-native', 
//     setupFilesAfterEnv: [
//     // 1. specific setup for react-native 
//     '@testing-library/jest-native/extend-expect',

//     // 2. global setup & mocking for some services: 
//     './jest.setup.js',

//     // 3. mocking for more services: 
//     './__mocks__/react-native-firebase.js',
//     "./__mocks__/@react-native-community/google-signin.ts", 
//   ],
//   // 4. You need to add the library to the RegEx below <- Problem Fix
//   //    For example, if the error was related to "react-native-elements", you need to add it to the list (as shown below.) 
//   transformIgnorePatterns: ["node_modules/(?!((jest-)?react-native|react-native-elements|@react-native(-community)?)/)"], 
// }