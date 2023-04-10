/* part - 1: very messy way to write NOVICE approach.

//const http = require("http") //importing http and creating it's object  'http'  so that we can use functions like createServer
// const love = require("love")


// now the above line is old way of doing things, we can directly import and export  , to use that in the pagcakge.js file add type:"module", means everything(like function or variable) we'll be treating as module and can import or export them 
//below is the new way
import http from "http";
import champackchacha, {gf2,gf3,love} from "./features.js";

import fs from "fs" //has methods to read or write files

/*
//now the below thing is async read so the function read hone tak rukega nahi will execute the remaining stuff
const home = fs.readFile("./index.html",()=>{   //the second argument is call back function means jab read ho jaye uske baad ye function chale
    console.log("file read")
})


//so we read synchronously
const home = fs.readFileSync("./index.html");

//below stuff is the most irritating way to write ab yaha method like GET, PUT, POST, DELETE ye bhi check karne ho to code will be very messy.
const server = http.createServer( (req,res)=>{  //first parameter is request second is response

   if(req.method==GET)
   {
    ... many combinations and alot of stuff to write 
   }

    if(req.url === "/about"  )
    {
        res.end(love());
    }
    else if(req.url ==="/"){

        res.end(home);
    }
    else if(req.url==="/contact"){
        res.end("<h1> contact page</h1>");
    }
    else{
        res.end("<h1> page not found</h1>");
    }

} );

server.listen(5000,()=>{  // now somewhere server should listen right where connection start/end ,where server waits for the request or data, so we give the port number 5000
console.log("server is working");
})

*/




/* part -2 , better way i.e using Express.js in short and better way we can write*/

import express from 'express';
import path from 'path'
import fs from 'fs'

//const server = express(); //done server ban gaya

//but as industry standard or convention instead of server we use the word app.

const app = express();

//we have specified that our static folder is public but as 'static' is a middleware to use it we have to use a "use()" method
app.use( express.static(path.join(path.resolve(),"public")) )

//setting up view engine so that we don't need to write extension everytime for the file like index.ejs
app.set("view engine","ejs");

app.get("/",(req,res)=>{

  //  const pathLocation = path.resolve() //absolute path dega from the current as for sendFile we need to give the whole absolute path
   //res.sendFile(path.join(pathLocation,"./index.html"))


   //now we will use ejs as we don't want to just pass static values run-time (dynamic html) what if I want to give some values so for what we'll use this engine
   //now we actually want to render the index.html file so we install a 'ejs' module and then create a views folder put this file inside it and rename it with extension ejs (in industry we do)
    
  // res.render("index",{name:"Amaterasu");  //this name variable value will be passed to the name in index.ejs file

     res.render("index")
     
   //now what if just want to deal with static files like normal html file, image file , js file
   //for this we create a folder called public (industry standard for static files), so all the files inside it are publicly accessbile we mostly keep the front-end code inside it
    
   //res.sendFile("index")  // so this will get the index.html file from static folder i.e public





})


app.listen(5000,()=>{

    console.log("server is running");

})