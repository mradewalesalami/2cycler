require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const session = require("express-session");
const port = process.env.PORT || 3000;
const app = express();
const passport = require("./config/passport-config");
const user_route = require("./routes/UserRoute");

const mongoose = require("mongoose");
const option = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
};
mongoose.connect(
	process.env.DB_HOST,
	option
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use("/scripts", express.static(`${__dirname}/node_modules/`));
app.use("/user", user_route);
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
	res.send();
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
