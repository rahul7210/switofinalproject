var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var P = new Schema(    //Person is object 
      {paytmnumber: String, items: String , amount: String, name: String,token: String}  //name here is property and string is value
 
);

mongoose.model('payment',P);      //to make a collection we use mongoose.model('<collectionName>',Object)

