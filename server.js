import http from 'node:http';

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if ( req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.write('<h1>hello index page</h1>');
    res.end();
    return;
  }

  if ( req.url === '/about' && req.method === 'GET') {
    res.statusCode = 200;
    res.write('<h1>hello about page</h1>');
    res.end();
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>404</h1>');
});

server.listen(3001, () => {
  console.log('Сервер запущен на 3001')
}); //подписка на сетевую карту для прослушивания запросов