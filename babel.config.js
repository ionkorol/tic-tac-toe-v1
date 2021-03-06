module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            screens: "./src/screens",
            assets: "./src/assets",
            style: "./src/style",
            utils: "./src/utils",
            navigation: "./src/navigation",
            lib: "./src/lib",
            store: "./src/store",
          },
        },
      ],
    ],
  };
};
