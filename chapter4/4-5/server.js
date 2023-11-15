const http = require("http");

// httpサーバーの生成
http
  .createServer((req, res) => {
    res.write("hello world\n");
    res.end();
  })
  .on("error", (err) => {
    console.log(err);
  })
  .listen(3000);
