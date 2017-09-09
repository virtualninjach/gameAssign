'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
  League: {
    type: String,
    required: 'Please enter the leauge name:'
    
  },
    RefName: {
    type: String,
    required: 'Please enter the ref name:'
    
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['assigned-pending acceptance', 'accepted', 'game completed']
    }],
    default: ['assigned-pending acceptance']
  }
});

module.exports = mongoose.model('Games', gameSchema);