var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/payment');
var mongoose = require('mongoose');
var P = mongoose.model('payment');



router.post('/add', function(req, res) {
  new P({
    paytmnumber : req.body.paytmnumber, 
    items : req.body.items,
    amount :req.body.amount,
    name : req.body.name,
    token:req.body.token,
    }
)
  .save(function(err, P) {
    console.log(P)   //terminal print
    res.json(P);     //Print in Postman 
  });
});

router.get('/view', function(req,res){
  P.find(function(err,P){
    console.log(P)
    res.json(P);
  })
})
// router.put('/update/:id', function(req, res) {
//   var query = {"_id": req.params.id};
//   var update = {name : req.body.name, 
//     email : req.body.email,
//     password : req.body.password,
//     weight :req.body.weight,
//     height :req.body.height}
//   var options = {new: true};
//   Person.findOneAndUpdate(query, update, options, function(err, Person){
//     console.log(Person)
//     res.json(Person);
//   });
// });
 
router.get('/delete/:id', function(req, res) {
  var query = {"_id": req.params.id};
  P.findOneAndRemove(query, function(err, P){
    console.log(P)
    res.json(P);
  });
});



module.exports = router;
