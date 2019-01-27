let router = require('koa-router')();
let ask = require('../model2/answer');

// 获取答疑列表
router.get('/answer', async ctx => {
    ctx.body = await ask.getAnswerList();    
});

// 添加用户问题
router.post('/answer', async ctx => {
    let value = ctx.request.body;
    ctx.body = await ask.addAsk(value);
});

// 推用户评论
router.put(`/answer/:id/comments`, async ctx => {
    let value = ctx.request.body;
    value.ask_id = ctx.params.id;
    ctx.body = await ask.addAnswer(value);
});

// 查询答疑详情
router.get(`/answer/:id`, async ctx => {
    let id = ctx.params.id;
    ctx.body = await ask.searchDetail(id);
});

// 模糊查询
router.get(`/answer/search/:title`, async ctx => {
    let title = ctx.params.title;
    ctx.body = await ask.searchTitle(title);
});

module.exports = router;