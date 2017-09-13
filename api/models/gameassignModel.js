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
    Coord: String,
    StateProvidence: String,
    ZipCode:String,
    Country:String
  },
  League: {
    Name: String,
    Divsion: String,
    ContactName1: String,
    ContactNumber1: String,
    Fee:String 
},
  RefName1: {
        FirstName: String,
        LastName: String,
        Pos: String,
        LicenseNumber:String,
        GradeNumber: String,
        AcceptanceStatus:String
  },
  RefName2: {
    FirstName: String,
    LastName: String,
    Pos: String,
    LicenseNumber:String,
    GradeNumber: String,
    AcceptanceStatus:String
},
RefName3: {
  FirstName: String,
  LastName: String,
  Pos: String,
  LicenseNumber:String,
  GradeNumber: String,
  AcceptanceStatus:String
},
Created_date: {
  type: Date,
  default: Date.now()
},
}
);

module.exports = mongoose.model('Games', gameSchema);