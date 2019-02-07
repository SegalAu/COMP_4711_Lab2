let http = require('http');
http.createServer(function (request, response){
    let date = new Date();
    let timestamp = date.getTime();
    response.writeHead(200, {'Content-type' : 'text/plain'});
    response.write(date + " ");
    response.end(); 
}).listen(8080); 

console.log("listening");