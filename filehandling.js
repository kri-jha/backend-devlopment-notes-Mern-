// const fs = require('node:fs'); // callback API

// fs.appendFile("hey.txt", "ye hijda bhi hai ", function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfully");
//   }
// });

// fs.rename ("hey.txt","hello.text", function(err){
//   if(err) console.error(err);
//   else console.log("done");
// }) // rename the file under the node 

const fs = require('node:fs');

// fs.copyFile("hello.txt", "./copy/chacha.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// fs.unlink("hello.txt", function (err) {
//   if(err) console.error(err);
//   else console.log("removed");
// }) // it is helps to remove the file from the specific path 

// fs.rm("./copy", {recursive: true}, function (err) {
//   if(err) console.error(err);
//   else console.log("removed");
// }) // it is helps to remove the directory from the specific path  and if we want to remove the directory with its content then we have to use recursive:true

// http  protocol is a rule of internet 
//  const http = require('node:http');
//  const server = http.createServer(function(req , res)
//  {
// res.end("hello world");
//  })

//  server.listen(3000);

 
