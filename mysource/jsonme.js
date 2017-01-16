// Program: jsonme.js
// Author:  Jim Medlock
// Date written: 1/15/2017

'use strict'

// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.
// 
// The port is passed in process.argv[2].  The file name is passed in process.argv[3].
// 
// Respond with:
// 
//     res.json(object)
// 
// Everything should match the '/books' resource path.
// 
// -------------------------------------------------------------------------------
// 
// ## HINTS
// 
// For reading, there's an fs module, e.g.,
// 
//     fs.readFile(filename, callback)
// 
// While the parsing can be done with JSON.parse:
// 
//     object = JSON.parse(string)

const fs = require("fs");
const express = require("express");
const url = require("url");

let fileStr;
let jsonData;

const app = express();
app.get("/books", function(request, response) {
    convertFileToJson(process.argv[3], emitJson)

    /**
     * Read the file and convert it to Json
     * Returns: N/a
     */
    function convertFileToJson(fileName, callback) {
      fs.readFile(fileName, 'utf8', function doneReading(err, fileContents) {
        if (err) {
          console.log("Error");
          console.error(err);
        }
        jsonData = JSON.parse(fileContents);
        console.log("jsonData=", jsonData);
        callback();
      });
    }
 
    /**
     * Pass the Json version of the file contents back as the response
     * Returns: N/a
     */
    function emitJson() {
        response.json(jsonData);
    }

});
app.listen(process.argv[2]);
