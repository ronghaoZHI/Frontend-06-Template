const http = require('http');
const archiver = require('archiver'); // 压缩工具
const child_process = require('child_process');
const querystring = require('querystring');

child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.f0ecd53ab543275e`);

http.createServer((request) => {
  const query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1]);
  publish(query.token);
}).listen(8081);

function publish(token) {
  const request = http.request({
    hostname: '127.0.0.1',
    port: 8080,
    method: 'POST',
    path: `/publish?token=${token}`,
    headers: {
      'Content-Type': 'application/octet-stream'
    }
  }, () => {
    console.log('finish');
  });

  const archive = archiver('zip', {
    zlib: {
      level: 9
    }
  });
  
  archive.directory('./files/', false);
  archive.finalize();
  archive.pipe(request); // fs stream => request stream queue

  request.end();
}