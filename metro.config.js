const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// Create the base config
const config = getDefaultConfig(__dirname);

// Add SVG transformer configuration
const { transformer, resolver } = config;
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"]
};

// Apply NativeWind and export the final config
module.exports = withNativeWind(config, { input: './global.css' });