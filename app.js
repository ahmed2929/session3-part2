const express=require('express')
var  app=express();
const path=require('path')
const config=require('./config')

app=config(app)


app.get('/',(req,res)=>{
//   
res.sendFile(path.join(__dirname,'view','shop.html'))

})

app.get('/add-product',(req,res)=>{

    res.sendFile(__dirname+'/view/add-product.html')
    
})
app.post('/add-product',(req,res)=>{
// fs


res.redirect('/');
})

app.use((req,res)=>{
    res.sendFile(__dirname+'/view/404.html')
})

app.listen(3000)
