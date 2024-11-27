var http = require('http'); //initialize http server
var fs = require('fs'); //file system,fs

http.createServer((req, res) => {
    fs.readFile('read.html', (err, data)=>{
        res.writeHead(200, {"Content-Type": "text/html"}); //status code & header type
        res.write(data);
        return res.end();
    });

}).listen(8080) //port number