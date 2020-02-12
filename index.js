var express = require('express');
var server = server= express();

server.get('/', (request, response)=>{
    response.send('Hello Word');
});
server.listen(3000);
