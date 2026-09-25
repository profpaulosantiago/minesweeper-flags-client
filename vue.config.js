module.exports = {
  chainWebpack: config => {
    config.externals({
      // klogging: "klogging"
    });
  },
  publicPath: "/"
};
