var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var stringBuffer;
var str;
stringBuffer = fs.readFileSync('index.html');
str = stringBuffer.toString('ascii', 0, stringBuffer.length );


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
