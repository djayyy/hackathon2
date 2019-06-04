const mongoose =require('mongoose');
const joinerSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    leader: {
        type : String,
        required: true,
        ref:'leader'
    },
    event: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'event'
    },
   name:{type:String,required:true},
   gender:{type:String,required:true},
   email:{type:String,required:true,unique:true},
   phone:{type:Number,required:true},
   password:{type:String,required:true}
});
module.exports = mongoose.model('joiner',joinerSchema);