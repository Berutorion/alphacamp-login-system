const router = require("express").Router();

router.use((req, res, next) => {
  if (req.cookies.login === "true") {
    console.log("someone has been login");
    next();
  } else {
    res.cookie("message", "You haven't login ");
    res.redirect("/");
  }
});

router.get("/profile", (req, res) => {
  const firstName = req.cookies.firstName;
  res.render("profile", { firstName });
});

module.exports = router;
