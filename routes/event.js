const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const eventModel =require('../models/eventModel');
router.get('/',function(req,res){
   eventModel.find()
   .exec()
   .then(pr =>{
       res.json(pr).status(200);
   })
});
router.post('/',function(req,res){
const newEvent = new eventModel({
    _id:new mongoose.Types.ObjectId(),
    leader:req.body.leader,
    trek_start:req.body.trek_start,
    trek_end:req.body.trek_end,
    meeting_date:req.body.meeting_date,
    meeting_address:req.body.meeting_address,
    meeting_time:req.body.meeting_time,
    joinerscount:req.body.joinerscount,
    price:req.body.price
});
newEvent.save(function(err,newEntry){
    if(err){
        res.json(err).status(400);
    }
    else {
        res.json(newEntry).status(201);
    }
});
}); 
router.get('/:eventId',function(req,res){
    const id = req.params.eventId;
    eventModel.find({_id:id})
    .exec()
    .then(prod=>{
        res.json(prod).status(200);
    })
});
router.get('/:leaderName',function(req,res){
    const ledr=req.params.leaderName;
    eventModel.find({leader: ledr})
    .exec()
    .then(pro=>{
        res.json(pro).status(200);
    })
});
module.exports = router;
