   //Express.js framework;
   //express js ek npm package hai 
   // manages everthing from receiving the request to sending the response   
   //setting up the express application 
//    import express from 'express'
const express = require('express'); // common js module system

const app = express(); // all power transfer to app variable 
app.use(express.json());  //json data ko readable karti hai 
app.use(express.urlencoded({extended: true})); // read a blob

app.get("/", function(req , res)
{
    res.send("hello world");
})
// app.get("/profile" ,function(req, res)
// {
// res.send("new skill add karo every one month due to ai  ");
// })
app.get("/profile" ,function(req, res , next)
{
// res.send("new skill add karo every one month due to ai  ");
// console.error(err, req, res, next)  {
    return next(new Error('Something broke!')) // pass the error to the next middleware
    // console.error(err.stack)
    // res.status(500).send('Something broke!')


})


//middleware 
// app.use(function(req, res, next) {
//     console.log("Middleware called");
//     next();
// });

// app.use((err, req, res, next) =>{
// console.error(err.stack)
//     res.status(500).send('Something broke!')
// });

app.listen(3000);

//request - and response handling 
// frontend backend frontend - user interface backend - server side

//error handling 
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}) // ye add karne se apka code error ke wajah se rukta nhi hai 
 
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })

//route create karna 
// youtebe.com/ - home page // domain ka part chor ke jitna part hota hai utna route hota hai
