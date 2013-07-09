//#!/usr/bin/env node
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

//var fs = require('fs');

//var contents = fs.readFileSync("index.html", "utf8");
//var buffer = new Buffer('contents');
//buffer.toString('utf-8', 0, 12)

//console.log(contents);



var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});
