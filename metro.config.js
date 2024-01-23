const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = {};

// Obtener la configuración predeterminada de Metro
const baseConfig = getDefaultConfig(__dirname);

// Combinar las configuraciones utilizando mergeConfig
const mergedConfig = mergeConfig(baseConfig, config);

// Aplicar configuración adicional con withNativeWind
const finalConfig = withNativeWind(mergedConfig, { input: './global.css' });

module.exports = finalConfig;