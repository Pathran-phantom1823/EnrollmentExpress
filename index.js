

var express = require('express');
var app  = express();
var router = express.Router();
var fsread = require('./script/fsread');
var fssave = require('./script/fssave');
const path = require('path');


router.all('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/class/:id', function (req, res) {
    var filename = req.params.id + ".csv";
    fsread.read(filename, res);
});

app.post('/enroll', function (req, res) {
    req.on('data', function (data) {
        fssave.save(data);
    });
});

//add the router
app.use(express.static(__dirname + '/view'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('app is running')