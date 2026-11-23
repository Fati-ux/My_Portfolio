import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.pdf': 'application/pdf', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon' };
const server = http.createServer(async (request, response) => {
 try {
  const url = new URL(request.url, 'http://127.0.0.1');
  let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
  if (file !== root && !file.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
  if ((await stat(file)).isDirectory()) {
   if (!url.pathname.endsWith('/')) { response.writeHead(308, { Location: `${url.pathname}/${url.search}` }).end(); return; }
   file = path.join(file, 'index.html');
  }
  const body = await readFile(file);
  response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' }).end(request.method === 'HEAD' ? undefined : body);
 } catch {
  const body = await readFile(path.join(root, '404.html'));
  response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(request.method === 'HEAD' ? undefined : body);
 }
});
server.listen(3100, '127.0.0.1', () => console.log('Static export preview: http://127.0.0.1:3100'));
