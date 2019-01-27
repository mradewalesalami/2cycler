const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const config = require("./config/config");
const router = require("./routes/route");
const port = config.port || 3000;
const app = express();

const dbOption = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
};
mongoose.connect(
	config.dbUri,
	dbOption
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("connected", () => {
	console.log("Connected to database");
}).on("error", err => {
	console.log(`Database connection error: ${err.message}`);
});

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.use("/node", express.static(`${__dirname}/node_modules/`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	session({
		secret: config.sessionSecret,
		resave: false,
		saveUninitialized: false
	})
);
app.use(flash());
app.use("/", router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
