const express = require('express');
const db = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3000;

// Requiring our models for syncing
// const allModels = require("./models")

// const  test = require("./models")

// const  Traveller = allModels.Traveller
// const  Location = allModels.Location
// const  Trip = allModels.Trip

// const {Traveller, Location, Trip} = require("./models/index")


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// app.get("/api/users",(req,res)=>{
//     User.findAll({
//         include:[Joke, Comment]
//     }).then(users=>{
//         res.json(users)
//     })
// })
// app.get("/api/jokes",(req,res)=>{
//     Joke.findAll({
//         include:[User, Comment]
//     }).then(users=>{
//         res.json(users)
//     }).catch(err=>{
//         console.log(err);
//         res.send("whoops")
//     })
// })

// app.get("/api/comments",(req,res)=>{
//     Comment.findAll({
//         include:[User]
//     }).then(users=>{
//         res.json(users)
//     }).catch(err=>{
//         console.log(err);
//         res.send("whoops")
//     })
// })




db.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});