import '@testing-library/react-native/extend-expect';

// include this line for mocking react-native-gesture-handler
//https://reactnavigation.org/docs/testing/
import 'react-native-gesture-handler/jestSetup';
//https://github.com/software-mansion/react-native-reanimated/pull/4136
// jest.mock("react-native-reanimated", () =>
//   require("react-native-reanimated/mock")
// );

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
// jest.mock('react-native-reanimated', () => {
//     const Reanimated = require('react-native-reanimated/mock');
//     // The mock for `call` immediately calls the callback which is incorrect
//     // So we override it with a no-op
//     Reanimated.default.call = () => {};
//     return Reanimated;
//   });
  jest.mock('react-native-reanimated', () => jest.fn() )
// jest.mock('react-native-reanimated', () => jest.fn());

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


jest.mock('react-native-linear-gradient', () => 'LinearGradient');// LinearGradient es el nombre del componente que se usa en HomeScreen

