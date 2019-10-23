module.exports = {
  devServer: {
    public: 'my-dev-host.local',
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/autoload.scss";
        `
      }
    }
  }
};
