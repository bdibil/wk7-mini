const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Trip.belongsTo(Traveller);
Traveller.hasMany(Trip);
Location.belongsTo(Trip);


// Comment.belongsTo(Joke);
// Comment.belongsTo(User);
// Joke.hasMany(Comment);
// User.hasMany(Comment);


console.log("hello from models index!")




module.exports= {
    Traveller:Traveller,
    Trip:Trip,
    Location:Location
}


