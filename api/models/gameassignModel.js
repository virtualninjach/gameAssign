'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
  Game: {
    Date: Date,
    Time: String
  },
  Location: {
    Address1: String,
    Address2: String,
    Coor: Coordinates,
    StateProvidence: String,
    ZipCode:String,
    Country:String
  },
  League: {
    Name: String,
    ContactName1: String,
    ContactNumber1: String,
    Fee:String 
},
  RefName1: {
        FirstName: String,
        LastName: String,
        Pos: String,
        LicenseNumber:String,
        GradeNumber: String
  },
  Created_date:Date.now,

  GameAcceptStatus:String
  }
);

module.exports = mongoose.model('Games', gameSchema);