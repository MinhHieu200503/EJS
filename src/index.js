const express = require("express");
const app = express();
const path=require("path")

// use view engine EJS
app.set("views",path.join(__dirname,"/views"))//=>config path folder views
app.set("view engine","ejs") //=> config use EJS
app.use(express.static("src/public"))

//routes and use EJS render view
app.get("/",(req,res)=>{
    res.status(200).render("homePage.ejs",{
        "pageTitle":"Home"
    })  
    console.log(__dirname)
})

app.get("/contact",(req,res)=>{
    res.status(200).render("contact",{
        "pageTitle":"contact",
        "language":["js","java"]
    })
    console.log(__dirname)
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})