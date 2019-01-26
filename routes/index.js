const router = require('koa-router')();
const got = require('got');

router.get('/index_list', async ctx => {
    try {
        let ret = await got('https://api.github.com/users/PanJiaChen/followers');
        ctx.body = {status: 0,message: '获取第三方数据',data: JSON.parse(ret.body)};
    }catch(e) {
        ctx.body = {status: 0,message:'接口报错', data: []};
    }
    
})

module.exports = router
