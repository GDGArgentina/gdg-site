/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.all('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/', function(req, res) {
  res.json(200, {view: "Home", result:"Not Found"});
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
});







