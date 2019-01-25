const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/UserModel");

module.exports = passport => {
	passport.use(
		"local-signup",
		new LocalStrategy(
			{
				usernameField: "email"
			},
			function(email, done) {
				User.findOne({ email: email }, function(err, user) {
					if (err) {
						return done(err);
					} else if (user) {
						return done(null, false, {
							message: "This Email is already taken"
						});
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
								return done(err);
							}
							return done(null, newUser);
						});
					}
				});
			}
		)
	);

	passport.use(
		"local-login",
		new LocalStrategy(
			{
				usernameField: "email"
			},
			function(email, password, done) {
				User.findOne({ email: email }, function(err, user) {
					if (err) {
						return done(err);
					} else if (!user) {
						return done(null, false, { message: "Email doesnt exist" });
					} else if (!user.comparePassword(password)) {
						return done(null, false, { message: "Incorrect password" });
					} else {
						return done(null, user);
					}
				});
			}
		)
	);
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
};
