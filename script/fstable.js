exports.creatTable = function (data,response) {
    var tr = "<tbody>"
    var closer = "</tbody></table></body></html>"
    var table = "<html><head><title>Document</title>" +
        '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">' +
        "<style>" +
        " table{width: 100%;margin: 20px 0;border-collapse: collapse;}" +
        "table, th, td{border-bottom: 1px solid black;color: black;}" +
        "table th, table td{padding: 5px;text-align: left;}" +
        "thead {font-size:20px;font-family:times new roman}"+
        "tr:hover {background-color:rgba(91, 224, 245,0.4);}body{background-image: url('https://d3i6fh83elv35t.cloudfront.net/static/2018/08/Books_HD_8314929977-1024x682.jpg');"+
        "background-position-y: 40%;"+
        "background-repeat: no-repeat;"+
        "background-size: cover;}h1{color:white}</style>" +
        "<body><center><h1>"+"List of Students:\n<h1></center><div class='container'><div class = 'jumbotron'+ ><table><tr><thead><td>Name</td><td>Email</td><td>Course</td></tr></thead>";
    var a = data.split('\n').join(',');
    var b = a.split(',');
    var counter = 0;
    var len = b.length - 1;
    for (var i = 0; i < len / 3; ++i) {
        tr += "<tr><td>" + b[counter] + "</td><td>" + b[counter + 1] + "</td><td>" + b[counter + 2] +  "</td>";
        counter += 3;
    }
    table += tr + closer;

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(table);
    
};