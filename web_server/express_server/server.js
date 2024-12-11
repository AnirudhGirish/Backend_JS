import express from 'express'

const app = express()
const port = 3000

app.get("/", (req,res)=>{
    res.send("Server up and working fine!!!!")
})
app.get("/login", (req,res)=>{
    res.send("Server up and serving login!!!!")
})
app.get("/logout", (req,res)=>{
    res.send("Server up and serving logout!!!!")
})
app.get("/contact", (req,res)=>{
    res.send("Server up and serving contact!!!!")
})
app.get("/about", (req,res)=>{
    res.send("Server up and serving about!!!!")
})

app.listen(port, ()=>{
    console.log(`Express backend is running on port ${port} : Server Running`);
})