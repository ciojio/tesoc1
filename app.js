const express = require('express');

console.log("Hello World! \n");
const app = express();
//console.log(app);
var http = require('http');
const path = require('path');

const server=http.createServer(app);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
    //res.send('Hello ? my world');
});
const PORTS = 8080;
// const HOST = '0.0.0.0';
const HOST = 'localhost';
const IPA = '0.0.0.0';

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// const HOST = 'test.com';

// const port=process.env.PORT || 80;
// app.listen(PORT);


//app.listen(PORT,HOST);
app.listen(port,ip);
//console.log(`Running on http://${HOST}:${PORT}`);