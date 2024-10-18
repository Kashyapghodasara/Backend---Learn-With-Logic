/*        BACKEND - Learn With Logic
-------------------------------------------- */

// installed Express js
// installed EJS
// installed nodemon


const express = require('express');
const app = express();
const path = require('path');


// This is used for encoding the Data in redeable format.
app.use(express.json());
app.use(express.urlencoded({extended : true})); 

// Setup Static Files,
app.use(express.static('./public'));

// Set the Template Engine = EJS,  We must use "SET" not "use".
app.set('view engine', 'ejs');




// This is an Basic Routes Exercise.
app.get("/", function(req, res, next) {
    res.render("index");
    const err = new Error('Something went wrong!');
    next(err);
})
app.get("/profile", function(req, res) {
    res.send("Hello guys We are on /profile")
})
app.get("/contact", function(req, res) {
    res.send("Hello guys We are on /contact")
})


// Dynamic Routes 
app.get("/:username", function(req, res) {
    res.send(`Hello Everyone I am ${req.params.username}`);
    // localhost:3000/batmen = output = I am Batmen
})


app.use(function (err, req, res, next) {
    console.error(err.stack);  // Log the error stack trace
    res.status(500).send('Internal Server Error: ' + err.message);  // Respond with a 500 status and error message
});
app.listen(3000);