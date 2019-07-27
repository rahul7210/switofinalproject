var mongoose = require('mongoose');
var Schema = mongoose.Schema; //Schema here is method

var Person = new Schema(    //Person is object 
      {item: String, quantity: String , price: String, phone: String,payment: String}  //name here is property and string is value
 
);

mongoose.model('orders',Person);      //to make a collection we use mongoose.model('<collectionName>',Object)

