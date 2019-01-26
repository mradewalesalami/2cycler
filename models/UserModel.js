const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const salt_round = 10;

const UserSchema = new Schema(
	{
		first_name: { type: String, required: true },
		last_name: { type: String, required: true },
		email: {
			type: String,
			required: true,
			lowercase: true,
			unique: true,
			index: true
		},
		password: { type: String, required: true },
		phone_num: {
			main: { type: Number, required: true },
			whatsapp: { type: Number }
		},
		d_o_b: { type: Date, required: true },
		sex: { type: String, required: true },
		bank: {
			bank_name: { type: String },
			bank_acct_name: { type: String },
			bank_acct_num: { type: Number }
		},
		avatar: {
			url: { type: String },
			id: { type: String }
		},
		is_verified: { type: Boolean, default: false }
	},
	{ timestamps: true }
);
UserSchema.pre("save", function(next) {
	let user = this;
	if (!user.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(salt_round, function(err, salt) {
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
UserSchema.methods.comparePassword = function(password) {
	bcrypt.compare(password, this.password, function(err, res) {
		if (err) {
			return err;
		}
		return res;
	});
};

module.exports = mongoose.model("User", UserSchema);
