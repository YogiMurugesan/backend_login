const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin123@cluster0.0vvzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log(e);
    console.log('failed to connect');
})


const RegisterSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    ac: {
      type: String,
      required: true
    },
    phoneno: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    }
  });
  
  // Define models
  
  const detail=new mongoose.model("detail",RegisterSchema )
  
  module.exports=detail




