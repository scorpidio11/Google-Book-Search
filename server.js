/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require('express'); // Server
const bodyParser = require ('body-parser'); // JSON Middleware
const logger = require('morgan'); // REST Logger
const mongoose = require('mongoose'); // MongoDB ORM
const routes = require("./routes");
let db = require("./models"); // Require all models

/////////////////////////////////////////////// /* Variables */ //////////////////////////////////////////////////////////
let PORT = process.env.PORT || 5000;
let mongooseConnection = mongoose.connection;

/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////////
let app = express();

/////////////////////////////////////////////// 
// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Allows For JSON Interactions Between Client & Server



app.use(express.static("client/build")); // Serve Static React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


/////////////////////////////////////////////// /* Mongoose Configurations*/ //////////////////////////////////////////////////////////
mongoose.Promise = global.Promise; // Set up promises with mongoose


// Connect to the Mongo DB

// mongoose.connect('mongodb://localhost/article');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/article");

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });





mongooseConnection.on('error', console.error.bind(console, 'connection error:'));

mongooseConnection.once('open', function() {
  console.log(`Sucessfully Connected to Mongo DB !`); // If Connection is successful, Console.log(Message)
});

var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

app.post("/saveArticle", function(req, res) {
   console.log("back path hit")
   db.Article.create(req.body).then((lol)=>
     console.log(lol)
   );
});


app.use(routes); // Add routes, both API and View

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////////
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
