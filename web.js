var express = require('express');
var fs = require('fs');
var app = express();

var text = app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
    var buffer = new Buffer(text, 'utf-8');
    response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
