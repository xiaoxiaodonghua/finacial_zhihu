const router = require('koa-router')();
const user = require('../model2/user');

// 查询用户列表
router.get('/user', async ctx => {
    ctx.body = await user.findUserList;
})

// 注册
router.post('/user', async ctx => {
    ctx.body = await user.postUser(ctx.request.body);
})

// 登陆
router.post('/user/login', async ctx => {
    ctx.body = await user.userLogin(ctx.request.body);
})

module.exports = router;