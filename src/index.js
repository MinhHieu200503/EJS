const express = require("express");
const app = express();
const path=require("path")

// use view engine EJS
app.set("views",path.join(__dirname,"/views"))//=>config path folder views
app.set("view engine","ejs") //=> config use EJS


//routes and use EJS render view
app.get("/",(req,res)=>{
    res.status(200).render("homePage.ejs",{
        "pageTitle":"Home"
    })  
    console.log(__dirname)
})

app.get("/contact",(req,res)=>{
    res.status(200).render("contact",{
        "pageTitle":"contact"
    })
    console.log(__dirname)
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})