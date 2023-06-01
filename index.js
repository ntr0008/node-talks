////////////////////////////////  QUESTION ONE  /////////////////////////////////////

const { readFileSync, writeFileSync } = require("fs"); //

const fs = require("fs"); // This lets us access file system

const first = readFileSync("./content/first.txt", "utf8"); // This allows us to read first.txt synchronously
const second = readFileSync("./content/second.txt", "utf8"); // This allows us to read second.txt synchronously

console.log(first, second); // This logs first and second text to the console

writeFileSync(
  // This will allow us to write a file synchronously
  "./content/result-sync.txt", // This makes the new file that the result will be in
  `Here is the result : ${first}, ${second}` // This combines the first and second text file
);

writeFileSync(
  "./content/result-sync.txt", // This makes the new file that the result will be in
  `Here is the result : ${first}, ${second}`, // This combines the first and second text file
  { flag: "a" } // I am unsure what this does but I am assuming that it will flag an error
);

////////////////////////////////////  QUSETION TWO  ///////////////////////////////////////

const { readFile, writeFile } = require("fs");
console.log("start"); // Let the developer know that this is the start of the program
readFile("./content/first.txt", "utf8", (err, result) => {
  // This will read a file asynchronously
  if (err) {
    // If there is an error
    console.log(err); // Then console.log the error
    return; // Return the error
  }
  const first = result; // The variable first will equal result
  console.log(result); // Console.log result
  readFile("./content/second.txt", "utf8", (err, result) => {
    // This will read a file asynchronously
    if (err) {
      // If there is an error
      console.log(err); // Then console.log the error
      return; // Return the error
    }
    const second = result; // The variable second will equal result
    console.log(result); // Console.log result
    writeFile(
      // This will write a file asynchronously
      "./content/result-async.txt", // This makes the new file called result-async.txt
      `Here is the result : ${first}, ${second}`, // This combines the first and second text file
      (err, result) => {
        if (err) {
          // If there is an error
          console.log(err); // Then console.log the error
          return; // Return the error
        }
        console.log("done with the task"); // Let's the develper know that the task is done
      }
    );
  });
});

console.log("starting next task"); // Let's the developer know that the next task is starting

////////////////////////////////////  QUESTION THREE  //////////////////////////////////////

const getTodos = () => {
  // Makes a function called getTodos
  const request = new XMLHttpRequest(); // This makes a new http request

  request.addEventListener("readystatechange", () => {
    // Adds a event listener
    if (request.readyState === 4 && request.status === 200) {
      // checks to see if the server is running and gives a 200 status code if it does
      console.log(request.responseText); // console.log the request
    } else if (request.readyState === 4) {
      // if the server is not running then
      console.log("could not fetch the data"); // console.log could not fetch the data
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // This will open our http url
  request.send(); // This will initiate the request
};

getTodos(); // This will call the function
getTodos(); // This will call the function

/////////////////////////////////////  QUESTION FOUR  //////////////////////////////////

// Validation.js

const { check } = require("express-validator"); // This line imports the check function from the express-validator package.
exports.signupValidation = [
  // I think that this exports an array but I am not 100 percent on this
  check("name", "Name is requied").not().isEmpty(), // This checks for a name and to make sure this field is not empty
  check("email", "Please include a valid email") // This asks for a vaild email address to be entered
    .isEmail() // This is a function
    .normalizeEmail({ gmail_remove_dots: true }), // I think this makes the email entered look normal?
  check("password", "Password must be 6 or more characters").isLength({
    // Checks the password and if it has 6 or more characters
    min: 6, // Six characters is the least amount that the password can have
  }),
];
exports.loginValidation = [
  // I think that this exports an array but I am not 100 percent on this
  check("email", "Please include a valid email") // This asks for a vaild email address to be entered
    .isEmail() // This is a function
    .normalizeEmail({ gmail_remove_dots: true }), // I think this makes the email entered look normal?
  check("password", "Password must be 6 or more characters").isLength({
    // Checks the password and if it has 6 or more characters
    min: 6, // Six characters is the least amount that the password can have
  }),
];

// Server.js file

const createError = require("http-errors"); // This line imports the http-errors module
const express = require("express"); // This line imports the express module
const path = require("path"); // This line imports the path module
const bodyParser = require("body-parser"); // This line imports the body-parser module
const cors = require("cors"); // This line imports the cors module
const { signupValidation, loginValidation } = require("./validation.js");
const app = express(); // This line creates an instance of the Express application.
app.use(express.json()); // This uses the express module with json
app.use(bodyParser.json()); // This uses the bodyParser module with json
app.use(
  bodyParser.urlencoded({
    // I am unsure what this does but it has something to do with the url
    extended: true,
  })
);
app.use(cors()); // This uses the cors module

//////////////////////////////////  QUESTION FIVE  ///////////////////////////////////////////

var mysql = require("mysql"); // This line imports mysql
var connection = mysql.createConnection({
  // Make a variable and it will equal mysql.createConnection
  host: "localhost", // This is the host
  user: "your username", // This is the username
  password: "your password", // This is the password
  database: "your database name", // This is the database name
});
connection.connect(function (error) {
  if (!!error) {
    // If there is an error
    console.log(error); // Then console.log the error
  } else {
    console.log("Connected!:)"); // else console.log connected
  }
});
module.exports = connection;
