const mongoose=require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/K-Hub",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("mongodb connected");
})
.catch(error =>{
    console.error('failed',error);
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection