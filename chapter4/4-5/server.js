const http = require("http");

// httpサーバーの生成
http
  .createServer((req, res) => {
    res.write("hello world\n");
    res.end();
  })
  .listen(3000);
