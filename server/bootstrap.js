/* 
 * Bootstraping para nodeJS
 * 
 * TODO estructurar aplicacion en el servidor
 * 
 * @author Cristian Rinaldi <csrinaldi@gmail.com>
 */
var express = require("express"),
        app = express(),
        http = require("http"),
        fs = require('fs');

app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.use(express.compress());

console.log(__dirname);

app.use(express.static(__dirname + '/public'));

server = http.createServer(app);

app.all('*', function(req, res, next) {
    if (!req.get('Origin'))
        return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method)
        return res.send(200);
    next();
});

app.post('/users/login', function(req, res) {
    res.send("Hello world!");
});

app.post('/users/:id/edit', function(req, res) {
    res.send("Hello world!");
});

app.get('/users/:id', function(req, res) {
    res.send("Hello world!");
});

app.get('/tutorials', function(req, res) {
    res.send("Hello world!");
});

server.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
    console.log("The index.html is ready");
});










