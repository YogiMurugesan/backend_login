const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin123@cluster0.0vvzk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log(e);
    console.log('failed to connect');
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection",LogInSchema)

module.exports=collection