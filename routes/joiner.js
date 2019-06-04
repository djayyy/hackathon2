const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const joinerModel = require('../models/joinerModel');

router.get('/',function(req,res){
    joinerModel.find()
    .exec()
    .then(joiners=>{
        res.json(joiners).status(200);
    })
    .catch(err =>{
        res.json(err).status(201);
    })
 });
 router.post('/',function(req,res){
    const newJoiner = new joinerModel({
        _id:new mongoose.Types.ObjectId(),
        leader:req.body.leader,
        event:req.body.event,
        name:req.body.name,
        gender:req.body.gender,
        email : req.body.email,
        phone:req.body.phone,
        password:req.body.password
    });
    joinerModel.find({email:req.body.email})
    .exec()
    .then(joiners =>{
        if(joiners.length>0){
          res.send("joiner already exist").status(400);
        }else{
            newJoiner.save();
            res.send("you are joined to this event").status(200);4
        }
    })
    .catch(err =>{
        console.log(err);
    })
});



router.get('/:eventId',function(req,res){
    const evv= req.params.eventId;
    joinerModel.find({event: evv})
    .exec()
    .then(jr=>{
        res.json(jr).status(200);
    })
    .catch(err =>{
        res.json(err).status(201);
    })
});
module.exports = router;