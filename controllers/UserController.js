const User = require("../models/UserModel");
const passport = require("passport");
require("../config/passport-config")(passport);

exports.user_signup_get = (req, res) => {
	res.send();
};

exports.user_signup_post = (req, res, next) => {
	User.findOne({ email: req.body.email }, function(err, user) {
		if (err) {
			return next(err);
		} else if (user) {
			return res.send("Email available");
		} else {
			const newUser = new User({
				first_name: req.body.first_name,
				last_name: req.body.last_name,
				email: req.body.email,
				d_o_b: req.body.d_o_b,
				sex: req.body.sex,
				password: req.body.password,
				phone_num: { main: req.body.main_num }
			});
			newUser.save(function(err) {
				if (err) {
					return next(err);
				}
				res.send("Sucess");
			});
		}
	});
};

exports.user_login_get = (req, res) => {
	res.send();
};

exports.user_login_post = passport.authenticate("local", {
	successRedirect: "/dashboard",
	failureRedirect: "/login"
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
