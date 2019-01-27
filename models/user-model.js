const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const saltRound = 10;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			index: true
		},
		password: { type: String, required: true },
		phoneNum: {
			main: { type: Number, required: true },
			whatsapp: { type: Number }
		},
		bank: {
			bankName: { type: String },
			bankAcctName: { type: String },
			bankAcctNum: { type: Number }
		},
		avatar: {
			url: { type: String },
			id: { type: String }
		}
	},
	{ timestamps: true }
);
userSchema.pre("save", function(next) {
	let user = this;
	if (!user.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(saltRound, function(err, salt) {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});
userSchema.methods.comparePassword = function(password) {
	let user = this;
	bcrypt.compare(password, user.password, function(err, res) {
		if (err) {
			return err;
		}
		return res;
	});
};

module.exports = mongoose.model("User", userSchema);
