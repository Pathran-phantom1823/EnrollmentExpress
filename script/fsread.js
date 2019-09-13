var fs = require('fs');
var tabs = require('./fstable');
exports.read = function (param,response) {
    fs.readFile(param, "utf8", function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("<center><img src = 'https://media.istockphoto.com/vectors/concept-file-not-found-robot-with-folder-vector-id645100772?k=6&m=645100772&s=612x612&w=0&h=JrdhnrS4gG_ZryAkk3y9wXiC3SW6Z_TO-j4uz9487Cc='></center>");
        }
       tabs.creatTable(data,response);
    });
};

exports.normalRead = function(filename, response){
    fs.readFile(filename, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            return response.end("404 Not Found");
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(data);
        return response.end();
    });
}