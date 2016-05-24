module.exports = function (app) {

  var mongoose = require('mongoose');
  var Student = require('../models/Student.js');
  var Subject = require('../models/Subjects.js');

  var User = require('../models/Student.js');


  //GET all users

  allSubjects = function (req,res){
    Subject.find(function(err,subjs){
      if (err) res.send(500, err.message);
      Student.populate(subjs,{path: "students"},function(err,subjs){
        console.log('GET all subjects');
        console.log(subjs);
        res.status(200).json(subjs);
      });

    });
  };

  addSubject = function(req,res) {
    var subject = new Subject({
      name: req.body.name,
      students:[],
    });
    console.log(req.body.name);

    subject.save(function (err, subj) {
      if (err) return  console.log("Imposible crear");
      res.status(200).json(subj);

    });
  }
  //GET - Get only a user


  addUser = function (req, res) {
    console.log(req.body.phones);

    var student = new Student({

      name: req.body.name,
      address: req.body.address,
     // phones: [{name:req.body.phones[0].name, number:req.body.phones[0].number}],
      phones: [{name:req.body.phonename, number:req.body.phonenum}],
    });

    student.save(function (err, student) {
      if (err) return res.send(500, err.message);
      res.status(200).json(student);

    });
  };

  getAllUsers = function (req, res) {
    Student.find(function (err, users) {
      if (err) res.send(500, err.message);
      console.log('GET /students');
      console.log(users);
      res.status(200).json(users);
    });
  };



  getUser = function(req, res){
    Student.findOne({name:req.params.name}, function (err, user) {
      console.log('Get user:' + req.params.name);
      if (err) res.send(500, err.message);
      console.log('GET /contactlist/:id');
      res.status(200).json(user);

    });
  }

  //Obtener subjects populando estudiantes
  getSubject = function(req, res){
    Subject.findOne({name:req.params.subj}, function (err, subjs) {
      if(err) res.send(500, err-message);
      Student.populate(subjs, {path: "students"}, function (err,subjs) {
        res.status(200).json(subjs);
        console.log(subjs);
      });

    });
  }

  addUserToSubj = function (req, res) {

    console.log('PUT');
    console.log(req.body.user);
    console.log(req.body.subject);
    Student.findOne({name: req.body.user},function(err,user){
      if(err) return err.message("User no existe");
      else {
        console.log(user);

        console.log(user._id);

        Subject.findOneAndUpdate({name: req.body.subject}, {$push: {students: user._id}}, function (err, data) {
          console.log(data);
          res.send(data);

        });
      }
    });



  };



  app.get('/subjects/', allSubjects);

  app.post('/student/', addUser);
  app.get('/student/:name',getUser);
  app.get('/students/', getAllUsers);
  app.get('/subjects/:subj', getSubject);
  app.post('/subjects/',addSubject);
  app.put('/subjects/',addUserToSubj);

}