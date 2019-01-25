const passport = require("passport");
require("../config/passport-config")(passport);

exports.homepage = (req, res) => {
	res.render("home");
};

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
	res.render("login");
};

exports.user_login_post = passport.authenticate("local-login", {
	successRedirect: "/dashboard",
	failureRedirect: "/login",
	failureFlash: true,
	successFlash: true
});

exports.user_update_get = (req, res) => {
	res.render("update");
};

exports.user_update_post = (req, res) => {
	res.send();
};

exports.user_profile = (req, res) => {
	res.render("profile");
};

exports.user_dashboard = (req, res) => {
	res.render("dashboard");
};

exports.about_page = (req, res) => {
	res.render("about");
};

exports.faq_page = (req, res) => {
	res.render("faq");
};

exports.contact_us = (req, res) => {
	res.render("contact-us");
};

exports.user_logout = (req, res) => {
	req.logout();
	res.redirect("/");
};
