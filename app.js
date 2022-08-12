const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

const port = 3000;

//set view engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.listen(port, () => {
  console.log(`Express server is working on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render("login");
});
