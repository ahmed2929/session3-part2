const bodyParser=require('body-parser')
const express=require('express')
module.exports=(app)=>{
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({extended:false}))
   

    return app;
}