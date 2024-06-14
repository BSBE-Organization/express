const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/print',(req,res)=>{
    res.send("message:server is running");
    console.log("server");
});
app.listen(PORT,()=>{
    console.log("Server is running");
})