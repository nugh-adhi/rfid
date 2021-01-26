require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const bodyParser = require('body-parser');
const LogService = require("./src/services/log");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

// post url
app.post("/", (req, res) => {
  return LogService.log(req, res);
});

// listener
app.listen(
	port,
	() => console.log(`Application running on port:${port}`)
);