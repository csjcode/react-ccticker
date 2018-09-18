
const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');
const querystring = require('querystring');
const compression = require('compression');
const bodyParser = require('body-parser');

https.createServer({ 
  key: fs.readFileSync("/etc/letsencrypt/live/coin.api.cc/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/coin.api.cc/fullchain.pem")
}, app).listen(443);


app.use(compression()); 
app.use(express.static(path.join(__dirname, 'build')));
app.use( bodyParser.json() );       // to support JSON-encoded bodies


function ensureSecure(req, res, next){
  
  console.log(req.hostname + ' ' + req.protocol);

  if(req.secure){
    // OK, continue
    console.log('secure');
    app.get('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
    
    app.get('/charts/range/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
     });
    return next();
  } else {
    console.log('redirecting');
    return res.redirect(301,'https://coin.api.cc'+req.url); // handle port numbers if non 443
  }
};


app.all('/*', ensureSecure);