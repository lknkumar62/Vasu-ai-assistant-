const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for importing SVG files
config.resolver.assetExts.push('svg');

// Add support for importing JSON files
config.resolver.assetExts.push('json');

// Add support for importing TTF files
config.resolver.assetExts.push('ttf');

// Add support for importing MP3 files
config.resolver.assetExts.push('mp3');

// Add support for importing WAV files
config.resolver.assetExts.push('wav');

module.exports = config;