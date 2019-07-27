var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var P = new Schema(    //Person is object 
      {name: String, email: String , subject: String, message: String}  //name here is property and string is value
 
);

mongoose.model('message',P);      //to make a collection we use mongoose.model('<collectionName>',Object)

