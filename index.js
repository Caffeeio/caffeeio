const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const sendFile = require('koa-sendfile');

const app = new Koa();

app.use(require('koa-logger')());

app.use(require('koa-static')(path.join(__dirname, './public')));

const router = new Router();

router.get('*', async (ctx) => {
  await sendFile(ctx, path.join(__dirname, './public/index.html'));
});

// Routes
app.use(router.routes());

app.listen(process.env.PORT || 3000);
