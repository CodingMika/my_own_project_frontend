const { createProxyMiddleware } = require("http-proxy-middleware");
const SERVER_PORT = 8000;

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: `http://localhost:${SERVER_PORT}`,
      changeOrigin: true,
    })
  );
};
