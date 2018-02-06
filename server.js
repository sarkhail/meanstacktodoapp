var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var api = require('./server/routes/api');
var port = 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', api);

app.get('**', function(req, res){
	res.sendFile(path.join(__dirname, 'dist/index.html'))
});

app.listen(port);
console.log("listen to port" +port);

