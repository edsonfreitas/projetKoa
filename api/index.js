import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/hello', async ctx => {
  ctx.body = '👋 Olá do /api/hello!';
});

router.get('/goodbye', async ctx => {
  ctx.body = '👋 Tchauzinho do /api/goodbye!';
});

app.use(router.routes()).use(router.allowedMethods());

export default (req, res) => {
  app.callback()(req, res);
};

