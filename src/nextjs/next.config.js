module.exports = {
  reactStrictMode: true,
  env: {
    LIFF_ID: process.env.LIFF_ID,
  },
  webpack: (config, { isServer, dev }) => {
    if (dev) {
      config.devtool = 'source-map';
    }
    return config;
  }
};
