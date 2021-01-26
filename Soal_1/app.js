require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const bodyParser = require('body-parser');
const Printer = require("./src/services/printer");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());

// post url
app.post("/", (req, res) => {
  return Printer.print(req, res);
});

// listener
app.listen(
	port,
	() => console.log(`Application running on port:${port}`)
);