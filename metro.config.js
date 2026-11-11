const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const engineSrc = path.resolve(projectRoot, 'engine', 'src');
const languagesRoot = path.resolve(projectRoot, 'vendor', 'mecp', 'languages');

const config = getDefaultConfig(projectRoot);

// Watch local engine + protocol language packs (submodule)
config.watchFolders = [engineSrc, languagesRoot];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
];

config.resolver.extraNodeModules = {
  '@mecp/engine': engineSrc,
};

module.exports = config;
