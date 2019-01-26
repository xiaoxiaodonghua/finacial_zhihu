let router = require('koa-router')();
let answer = require('../model/answer');
let config = require('../config');
const KYES = require('../config/keys');
// 获取答疑列表
router.get('/answer', async ctx => {
    let data, key = KYES.R_ANSWER_LIST, ret;
    data = await global.redis.get(key);
    console.log('答疑列表_redis_data', data);
    if (!data) {
        console.log('数据库拿数据');
        ret = await answer.find({}).sort({_id:-1});
        global.redis.set(key, JSON.stringify(ret));
        global.redis.expire(key, config.redisExpire.answer_list);
    } else {
        console.log('redis拿数据');
        ret = JSON.parse(data);
    }
    
    ctx.body = {status: 0, message: '获取答疑列表成功',data: ret};
})

// 添加用户问题
router.post('/answer', async ctx => {
    let answerAdd = await answer(ctx.request.body).save();
    ctx.body = {status: 0,message:'用户答疑添加成功',data:answerAdd};
    global.redis.del(KYES.R_ANSWER_LIST); // 添加后删除缓存
});

// 推用户评论
router.put(`/answer/:id/comments`, async ctx => {
    let saveChild = await answer.update({_id: ctx.params.id },{"$push":{"answer":{name:ctx.request.body.name, content:ctx.request.body.content}}});
    ctx.body = { status: 0, message:'查到数据了', data: saveChild };    
})

// 查询答疑详情
router.get(`/answer/:id`, async ctx => {
    let detail = await answer.find({_id: ctx.params.id});
    ctx.body = {status: 0, message:'查询到的文章', data: detail};
})

// 模糊查询
router.get('/answer/search/:title', async ctx => {
    let ret = await answer.find({title: { $regex: ctx.params.title , $options: 'i' } }).sort({_id: -1});
    ctx.body = {status: 0, message: '查询到的内容', data: ret };
})

module.exports = router
