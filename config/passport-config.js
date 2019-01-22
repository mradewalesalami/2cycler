const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/UserModel");

passport.use(
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

module.exports = passport;
