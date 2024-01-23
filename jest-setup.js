import '@testing-library/react-native/extend-expect';
jest.mock('react-native-reanimated', () => jest.fn());
jest.mock('react-native-linear-gradient', () => 'LinearGradient');// LinearGradient es el nombre del componente que se usa en HomeScreen
