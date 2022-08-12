const express = require("express");
const { engine } = require("express-handlebars");
const User = require("./models/user");
const app = express();

const port = 3000;

//set view engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
//body-parser
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Express server is working on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = User.find((user) => email === user.email);

  user
    ? user.password === password
      ? res.render("profile", { firstName: user.firstName })
      : res.render("login", { message: "email of password is wrong" })
    : res.render("login", { message: "email of password is wrong" });
});
