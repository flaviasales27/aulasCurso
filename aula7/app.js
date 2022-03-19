const http = require('http');

http.createServer((req, res) => {
    
    res.writeHead(200, {'content-type':'test/plain'})
    if(req.url === '/'){
        res.end('voce esta na pagina principal')
    }else if(req.url === '/contato'){
        res.end('voce esta na pagina de contato')
    }else{
        res.end('desculpe, essa pagina não existe')
    }
    res.end('testando o servidor')
}).listen(3000,console.log('servidor rodando'))