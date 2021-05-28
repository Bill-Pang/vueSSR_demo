// 第 1 步：创建一个 Vue 实例
const Vue = require("vue");
const server = require("express")();

// 第 2 步：创建一个 renderer
const template = require("fs").readFileSync("./index.template.html", "utf-8");
const renderer = require("vue-server-renderer").createRenderer({ template });
const context = {
  title: "hello !!!!!!!!!!!!!!???????????????????",
};

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },

    // 需要一个空的template 类似于vue-cli中组件最外层的template标签
    template: `<div id="app"></div>`,
  });

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
});

server.listen(8080, () => {
  console.log("runing port in 8080");
});
