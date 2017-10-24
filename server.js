import app from './app.js';
import http from 'http';
import https from 'https';
import fs from 'fs';
import express from 'express';

var server;

if(process.env.NODE_ENV != 'production') {

  // Dev server
  server = http.createServer(app).listen(8080, function () {
    console.log('Development server listening on port 8080');
  });

} else {

  // Port 80 serves a separate application which just redirects all
  // traffic to HTTPS.
  const httpApp = express();
  httpApp.get('*', (req, res) => {
    res.redirect(`https://${req.headers.host}${req.path}`);
  });
  http.createServer(httpApp).listen(80, function () {
    console.log('HTTP -> HTTPS Redirection server listening on port 80');
  });

  // Paths here currently set up for default letsencrypt installation on Ubuntu
  const privateKey = fs.readFileSync('/etc/letsencrypt/live/DOMAIN/privkey.pem', 'utf8');
  const certificate = fs.readFileSync('/etc/letsencrypt/live/DOMAIN/cert.pem', 'utf8');
  const chain = fs.readFileSync('/etc/letsencrypt/live/DOMAIN/chain.pem', 'utf8');
  const credentials = {key: privateKey, cert:certificate, ca:chain};
  server = https.createServer(credentials, app).listen(443, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Production HTTPS server listening on port 443');
  });

}

export default server;
