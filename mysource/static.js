// Program: static.js
// Author:  Jim Medlock
// Date written: 1/15/2017

'use strict'

// Apply static middleware to serve index.html file without any routes.
// 
// Your solution must listen on the port number supplied by process.argv[2].
// 
// The index.html file is provided and usable via the path supplied by
// process.argv[3]. However, you can use your own file with this content:
// 
//     <html>
//       <head>
//         <title>expressworks</title>
//         <link rel="stylesheet" type="text/css" href="/main.css"/>
//       </head>
//       <body>
//         <p>I am red!</p>
//       </body>
//     </html>
// 
// -------------------------------------------------------------------------------
// 
// ## HINTS
// 
// This is how you can call static middleware:
// 
//     app.use(express.static(path.join(__dirname, 'public')));
// 
// For this exercise expressworks will pass you the path:
// 
//     app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

var express = require('express');

var app = express();
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.listen(process.argv[2]);
