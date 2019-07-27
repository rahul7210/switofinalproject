var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
require('../models/sign');
var mongoose = require('mongoose');
var Person = mongoose.model('signs');



router.post('/add', function(req, res) {
  new Person({
    name : req.body.name, 
    email : req.body.email,
    canteenname:req.body.canteenname,
    phone:req.body.phone,
    password : req.body.password,
    address:req.body.address}
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
    canteenname : req.body.canteenname,
    phone :req.body.phone,
    password:req.body.password,
    address :req.body.address}
  var options = {new: true};
  Person.findOneAndUpdate(query, update, options, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});


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
  Person.findOneAndRemove(query, function(err, Person){
    console.log(Person)
    res.json(Person);
  });
});



router.post('/signin',(req,res)=>{
  const email = req.body.email;
  const password = req.body.password;
  console.log(email)
  Person.findOne({
      email:email
  },(err,user)=>{
      if(err){
          res.json(err);
      }
      else{
          console.log(user);
          if(user == null ){
            res.json({message:"Check your Credentials"});
          }
          else if (user.password != password){
              res.json({message:"Check your password"});
          }
          else{
              res.json(user);
          }
      }
  })
})


router.post('/signin2',(req,res)=>{
  const email = req.body.email;

  console.log(email)
  Person.findOne({
      email:email
  },(err,user)=>{
      if(err){
          res.json(err);
      }
      else{
          console.log(user);
          if(user == null ){
            res.json({message:"Check your email"});
          }
          else if (user.email != email){
            res.json({message:"Check your email"});
        }
          
          else{
              res.json(user);
          }
      }
  })
})

module.exports = router;
