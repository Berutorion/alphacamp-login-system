const express = require("express");
const { engine } = require("express-handlebars");
const cookieParser = require("cookie-parser");
const routers = require("./routes/index");
const app = express();

const port = 3000;

//set view engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", routers);

app.listen(port, () => {
  console.log(`Express server is working on http://localhost:${port}`);
});
