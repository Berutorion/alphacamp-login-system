const router = require("express").Router();
const User = require("../models/user");
const authRouter = require("./auth");

router.use("/auth", authRouter);

router.get("/", (req, res) => {
  if (req.cookies.login === "true") {
    res.redirect("/auth/profile");
  } else {
    const message = req.cookies.message;
    res.render("login", { message });
    res.clearCookie("message");
  }
});

router.post("/", (req, res) => {
  const { email, password } = req.body;
  const user = User.find((user) => email === user.email);

  if (user) {
    if (user.password === password) {
      res.cookie("login", "true");
      res.cookie("firstName", user.firstName);
      res.redirect("/auth/profile");
    } else {
      res.cookie("message", "email of password is wrong");
      res.redirect("/");
    }
  } else {
    res.cookie("message", "email of password is wrong");
    res.redirect("/");
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("login");
  res.clearCookie("firstName");
  res.redirect("/");
});

module.exports = router;
