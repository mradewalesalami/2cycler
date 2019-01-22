const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
	token: { type: String, required: true },
	created_time: {
		type: Date,
		required: true,
		default: Date.now,
		expires: 86400
	}
});

module.exports = mongoose.model("Token", TokenSchema);
