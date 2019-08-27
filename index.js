const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')('./assets', {
  maxage: 1000 * 60 * 10
}));

app.listen(3000);

console.log('listening on port 3000');