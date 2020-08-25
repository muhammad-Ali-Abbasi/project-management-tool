const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/sendEmailNotification',
    createProxyMiddleware({
      target: 'https://us-central1-projeetest.cloudfunctions.net',
      changeOrigin: true
    })
  );
};