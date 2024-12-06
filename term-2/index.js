const express = require('express')
const app = express()

console.log("hello World")

const port=8000

// path = /
app.get('/',(req,res)=>{
    let user = {
        firstname : "อาจารย์",
        lastname : "ทดสอบ",
        age : 30 ,
        gender :"male"
    }


})


app.listen(port,(req,res) =>{
    console.log("mum online")
})