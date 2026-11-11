const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const protocolRoot = path.resolve(projectRoot, 'vendor', 'mecp');

const config = getDefaultConfig(projectRoot);

// Watch the MECP protocol submodule for engine/ and languages/ changes
config.watchFolders = [protocolRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

// Resolve @mecp/engine to TypeScript source in the submodule
config.resolver.extraNodeModules = {
  '@mecp/engine': path.resolve(protocolRoot, 'engine', 'src'),
};

module.exports = config;
