const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const graylog = require('./middleware/graylog');

app.use(cors(
  {
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}));

const users = require('./routes2/users');
const answer = require('./routes/anwser');
const comments = require('./routes/comments');
const index = require('./routes/index');
const hot = require('./routes/hot');

// error handler
onerror(app);

// middlewares
app.use(bodyparser({enableTypes:['json', 'form', 'text']}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(graylog()); // 记录日志

// routes
app.use(users.routes(), users.allowedMethods());
app.use(answer.routes(), answer.allowedMethods());
app.use(comments.routes(), comments.allowedMethods());
app.use(index.routes(), index.allowedMethods());
app.use(hot.routes(), hot.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;
