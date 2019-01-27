const User = require("../models/user-model");

exports.homepage = (req, res) => {
	res.render("index");
};

exports.userSignupGet = (req, res) => {
	res.render("signup");
};

exports.userSignupPost = (req, res) => {};

exports.userLoginGet = (req, res) => {
	res.render("login");
};

exports.userLoginPost = (req, res) => {};

exports.userUpdateGet = (req, res) => {
	res.render("update");
};

exports.userUpdatePost = (req, res) => {};

exports.userProfile = (req, res) => {
	res.render("profile");
};

exports.userDashboard = (req, res) => {
	res.render("dashboard");
};

exports.aboutPage = (req, res) => {
	res.render("about");
};

exports.faqPage = (req, res) => {
	res.render("faq");
};

exports.contactUs = (req, res) => {
	res.render("contact-us");
};

exports.userLogout = (req, res) => {};
