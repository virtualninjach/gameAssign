'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
    Game: {
      Date: Date,
      Time: String
    },
    Location: {
      Name: String,
      Address1: String,
      Address2: String,
      Coord: String,
      City: String,
      StateProvidence: String,
      ZipCode:String,
      Country:String
    },
    Team1: {
      ClubName: String,
      ClubDivision: String,
      ClubAge: String,
      Coach1: String,
      Coach2: String,
      Coach1Contact: String,
      Coach2Contact: String,
      HomeOrVisitor: String,
      Notes: String
    },
    Team2: {
      ClubName: String,
      ClubDivision: String,
      ClubAge: String,
      Coach1: String,
      Coach2: String,
      Coach1Contact: String,
      Coach2Contact: String,
      HomeOrVisitor: String,
      Notes: String
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
    RefName4: {
      FirstName: String,
      LastName: String,
      Pos: String,
      LicenseNumber:String,
      GradeNumber: String,
      AcceptanceStatus:String
    },
    RefName5: {
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