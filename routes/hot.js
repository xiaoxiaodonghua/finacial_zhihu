let router = require('koa-router')();
let axios = require('axios');
let got = require('got');

router.get('/hot/list', async ctx => { 
    let ret = await axios.get('https://www.apiopen.top/novelApi');
    let ret2 = await axios.get("https://www.apiopen.top/satinApi?type=1&page=1");
    let data = {
       list: ret.data.data,
       imgList: ret2.data.data
    }
    ctx.body = { status: 0, message:'获取数据成功', data: data};
});

router.get('/hot/list2', async ctx => { 
    let ret = await got('https://www.apiopen.top/novelApi');
    ctx.body = JSON.parse(ret.body);
})

module.exports = router;
