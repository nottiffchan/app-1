var express = require('express');
var server = express();

const path = require('path');
const serveStatic = require('serve-static');
const port = process.env.PORT || 8888;
server.use(serveStatic(__dirname + '/dist/vibing'))

server.listen(port, () => console.log(`Server started at port ${port}!`));

