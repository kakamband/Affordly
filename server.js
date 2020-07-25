// Contributed by PIYUSH PIYUSH (B00844563, piyush@dal.ca)

const express = require("express");
const path = require("path");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const supportRoutes = require("./api/Routes/SupportRoutes");

app.use(cors()); // cross-origin request handler
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// connecting to mongoDB Atlas
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://affordly:affordly123@cluster0.lzi2l.mongodb.net/affordly?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
app.use("/support", supportRoutes);

const postRoute = require('./api/Routes/postRoute');

// Serve the static files
app.use(express.static(__dirname + "/affordly/build/"));

const payment = require("./api/Routes/payment");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/payment", payment);

app.get("/*", (req, res) => {
  //defining the path for the static files
  res.sendFile(path.join(__dirname + "/affordly/build/index.html"));
});

const port = process.env.PORT || 3000; // defining a port
app.listen(port, () => {
  console.log("server is listening on :  ", port);
});
