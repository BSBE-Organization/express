const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/print',(req,res)=>{
    res.json({message:"server is running"});
});
app.listen(PORT,()=>{
    console.log("Server is running");
})