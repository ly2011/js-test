const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
  ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  const name = ctx.request.query.name || 'world';
  ctx.request.type = 'text/html';
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

module.exports = app;
