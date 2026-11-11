module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@mecp/engine': './vendor/mecp/engine/src/index',
          },
        },
      ],
    ],
  };
};
