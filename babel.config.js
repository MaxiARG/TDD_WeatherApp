module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    'module:@react-native/babel-preset' ,
   'nativewind/babel',
   '@babel/preset-typescript',
  ],
  plugins: ['react-native-reanimated/plugin'],
};
