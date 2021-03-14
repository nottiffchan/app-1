var express = require('express');
var server = express();

const path = require('path');
const serveStatic = require('serve-static');
const port = process.env.PORT || 8888;
// server.use(serveStatic(__dirname + '/dist/vibing'))
server.use(express.static('./dist/vibing'));

server.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '/dist/vibing/index.html'));
});

server.listen(port, () => console.log(`Server started at port ${port}!`));

