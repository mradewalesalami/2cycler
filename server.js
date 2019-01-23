require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const session = require("express-session");
const port = process.env.PORT || 3000;
const app = express();
const passport = require("passport");
require("./config/passport-config")(passport);
const flash = require("connect-flash");
const router = require("./routes/Route");
const mongoose = require("mongoose");
const mongoose_option = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
};

mongoose.connect(
	process.env.DB_HOST,
	mongoose_option
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static("views"));
//app.use("/scripts", express.static(`${__dirname}/node_modules/`));
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use("/", router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
