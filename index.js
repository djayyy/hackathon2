const express = require('express');
const morgan  = require('morgan');
const parser = require('body-parser');
const leader = require('./routes/leader');
const event = require('./routes/event');
const joiner = require('./routes/joiner');
const app =express();
const port = 4000;

const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://dhananjay:loveunepal@cluster0-ih6b6.mongodb.net/test?retryWrites=true&w=majority",function(err){
if(err){
  console.log('not connected');
  console.log(err);
}else{
  console.log('atlas connected');
}
});
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use('*',function(req,res,next){
res.set('Access-Control-Allow-origin','*');
res.set('Access-Control-Allow-Headers','content-type');
next();
});
app.use('/leader',leader);
app.use('/event',event);
app.use('/joiner',joiner);

app.get('/',function(req,res){
res.send('bhejo').status(200);
});
app.listen(port,function(){
  console.log(`server listenng on ${port}`);
})