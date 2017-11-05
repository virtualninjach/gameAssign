'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
    
      gm_Date: Date,
      gm_Time: String,
    
      loc_Name: String,
      loc_Address1: String,
      loc_Address2: String,
      loc_Coord: String,
      loc_City: String,
      loc_StateProvidence: String,
      loc_ZipCode:String,
      loc_Country:String,
    
      tm1_ClubName: String,
      tm1_ClubDivision: String,
      tm1_ClubAge: String,
      tm1_Coach1: String,
      tm1_Coach2: String,
      tm1_Coach1Contact: String,
      tm1_Coach2Contact: String,
      tm1_HomeOrVisitor: String,
      tm1_Notes: String,
    
      tm2_ClubName: String,
      tm2_ClubDivision: String,
      tm2_ClubAge: String,
      tm2_Coach1: String,
      tm2_Coach2: String,
      tm2_Coach1Contact: String,
      tm2_Coach2Contact: String,
      tm2_HomeOrVisitor: String,
      tm2_Notes: String,
    
      
      lg_Name: String,
      lg_Divsion: String,
      lg_ContactName1: String,
      lg_ContactNumber1: String,
      lg_Fee:String,

      ref1_FirstName: String,
      ref1_LastName: String,
      ref1_Pos: String,
      ref1_LicenseNumber:String,
      ref1_GradeNumber: String,
      ref1_AcceptanceStatus:String,
    
      ref2_FirstName: String,
      ref2_LastName: String,
      ref2_Pos: String,
      ref2_LicenseNumber:String,
      ref2_GradeNumber: String,
      ref2_AcceptanceStatus:String,

      ref3_FirstName: String,
      ref3_LastName: String,
      ref3_Pos: String,
      ref3_LicenseNumber:String,
      ref3_GradeNumber: String,
      ref3_AcceptanceStatus:String,
    
      ref4_FirstName: String,
      ref4_LastName: String,
      ref4_Pos: String,
      ref4_LicenseNumber:String,
      ref4_GradeNumber: String,
      ref4_AcceptanceStatus:String,

      ref5_FirstName: String,
      ref5_LastName: String,
      ref5_Pos: String,
      ref5_LicenseNumber:String,
      ref5_GradeNumber: String,
      ref5_AcceptanceStatus:String,
    
      Created_date: {
      type: Date,
      default: Date.now()
    },
  }
);

module.exports = mongoose.model('Games', gameSchema);