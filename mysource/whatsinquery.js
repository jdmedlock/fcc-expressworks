// Program: whatsinquery.js
// Author:  Jim Medlock
// Date written: 1/15/2017

'use strict'

// Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.
// 
// -------------------------------------------------------------------------------
// 
// ## HINTS
// 
// In Express.js to extract query string parameters, we can use:
// 
//     req.query.NAME
// 
// To output JSON we can use:
// 
//     res.send(object)

const express = require("express");
const url = require("url");

const app = express();
app.get("/search", function(request, response) {
    const query = request.query;
    response.send(query);
});
app.listen(process.argv[2]);