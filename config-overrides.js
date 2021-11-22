/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, env) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };

    config.output.filename = "static/js/[name].js";

    config.plugins[5].options.filename = "static/css/[name].css";
    config.plugins[5].options.moduleFilename = () => "static/css/main.css";
    return config;
  },
};
