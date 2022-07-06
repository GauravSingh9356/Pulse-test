const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")


const  userSchema=mongoose.Schema({
    username: {
        type: String,
        required:true,
    },
   
    email: {
        type: String,
        required:true,
        trim:true
    },
    password: {
        type: String,
        required:true,
    },
   
})


userSchema.methods.checkPassword = async function (
    givenpassword,
    actualPassword
  ) {
    return await bcrypt.compare(givenpassword, actualPassword);
  };
  
  //document middleware
  userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });
  
  module.exports = mongoose.model('User', userSchema);
  


