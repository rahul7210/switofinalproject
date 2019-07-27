var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/order');
var mongoose = require('mongoose');
var Person = mongoose.model('orders');



router.post('/add', function(req, res) {
  new Person({
    item : req.body.item, 
    quantity : req.body.quantity,
    price : req.body.price,
    phone :req.body.phone,
    payment:req.body.payment}
)
  .save(function(err, Person) {
    console.log(Person)   //terminal print
    res.json(Person);     //Print in Postman 
  });
});

router.get('/view', function(req,res){
  Person.find(function(err,Person){
    console.log(Person)
    res.json(Person);
  })
})
router.put('/update/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = {name : req.body.name, 
    email : req.body.email,
    password : req.body.password,
    weight :req.body.weight,
    height :req.body.height}
  var options = {new: true};
  Person.findOneAndUpdate(query, update, options, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});
 
router.get('/delete/:id', function(req, res) {
  var query = {"_id": req.params.id};
  Person.findOneAndRemove(query, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});



module.exports = router;
