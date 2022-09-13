
const express = require('express');
const  app= express();


app.get('/',(req,res)=> {

res.send("hello kitteee")
});

app.get('/home',(req,res)=> {

    res.send("hello kitteee welcome to home")
    });


app.listen(5000)
