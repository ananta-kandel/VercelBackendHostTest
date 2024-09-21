const express = require("express");
const app = express();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()
app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/home", (req, res) => res.send("Hello on vercel"));
app.post("/hello",async (req,res)=>{
     const name = "ananta"
     const email = "kandelananta12@gmail.com"
     const user = await prisma.user.create({
        data: {
          name: name,
          email: email
        },
      })
      console.log(user)
})
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;