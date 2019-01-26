let router = require('koa-router')();
let comments = require('../model/comments');
let config = require('../config');
const KEYS = require('../config/keys'); 

router.prefix('/comments');

// 添加文章
router.post('/', async ctx => {
    let ret = await comments(ctx.request.body).save();
    ctx.body = {status: 0, message:'添加文章成功', data: ret};
    global.redis.del(KEYS.R_ARTICLE_LIST); // 添加后删除缓存
})

// 添加评论
router.put('/:_id/comments', async ctx => {
    let ret = await comments.update({"_id": ctx.params._id}, {
        "$push": {
            "comments": {
                "uname" : ctx.request.body.uname,
                "content" : ctx.request.body.content,
                "date": new Date()
            }
        }
    })

    ctx.body = {status: 0, message:'评论成功', data: ret};
    global.redis.del(`${KEYS.R_SINGLE_ARTICLE}${ctx.params._id}`); // 添加后删除缓存
})

// 查询单个文章
router.get('/:_id', async ctx => {
    let data, ret, key = `${KEYS.R_SINGLE_ARTICLE}${ctx.params._id}`;
    data = await global.redis.get(key);
    if (!data) {
        ret =  await comments.find({"_id": ctx.params._id});
        global.redis.set(key, JSON.stringify(ret));
        global.redis.expire(key, config.redisExpire.single_artical);
    } else {
        ret = JSON.parse(data);
    }
    ctx.body = ret;
});

// 查询文章列表
router.get('/', async ctx => {
    let data, key = KEYS.R_ARTICLE_LIST, ret;
    data = await global.redis.get(key);
    if (!data) {
        ret =  await comments.find({}).sort({_id: -1});
        global.redis.set(key, JSON.stringify(ret));
        global.redis.expire(key, config.redisExpire.artical_comments_list);
    } else {
        ret = JSON.parse(data);
    }
    ctx.body = ret;
});

module.exports = router
