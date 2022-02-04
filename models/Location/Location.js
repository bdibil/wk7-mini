const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Location extends Model {}


// Location.init({
//     // add properites here, ex:
//     name: {
//          type: DataTypes.STRING,
//          allowNull:false
//     },
//     email:{
//         type:DataTypes.STRING,
//         unique:true,
//         allowNull:false,
//         validate:{
//             isEmail:true
//         }
//     }
// },{
//     sequelize
// });


module.exports=Location