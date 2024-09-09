const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors()); // Enable CORS for all routes

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://hawas.runasp.net",
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // remove /api prefix when forwarding
    },
  })
);

app.listen(3000, () => {
  console.log("Proxy server running on port 3000");
});
