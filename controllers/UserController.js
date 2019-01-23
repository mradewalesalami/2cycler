const passport = require("passport");
require("../config/passport-config")(passport);

exports.user_signup_get = (req, res) => {
	res.render("signup");
};

exports.user_signup_post = passport.authenticate("local-signup", {
	successRedirect: "/profile",
	failureRedirect: "/signup",
	failureFlash: true,
	successFlash: true
});

exports.user_login_get = (req, res) => {
	res.send();
};

exports.user_login_post = passport.authenticate("local-login", {
	successRedirect: "/dashboard",
	failureRedirect: "/login",
	failureFlash: true,
	successFlash: true
});

exports.user_update_get = (req, res) => {
	res.send();
};

exports.user_update_post = (req, res) => {
	res.send();
};

exports.user_profile = (req, res) => {
	res.send();
};

exports.user_dashboard = (req, res) => {
	res.send("Welcome to dashboard");
};

exports.user_logout = (req, res) => {
	req.logout();
	res.redirect("/");
};
