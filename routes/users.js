let router = require('koa-router')();
let user = require('../model/user');
let config = require('../config');
const KEYS = require('../config/keys');

// 注册
router.post('/user', async ctx => {
	let body = ctx.request.body;
	let findUser = await user.find( {name: ctx.request.body.name} );
	if (findUser.length > 0){
		ctx.body = {status: 1, message:'该用户已存在请重新注册', data: null};
	} else {
		let ret = await user(body).save();
		ctx.body = {status: 0, message:'用户信息保存成功', data: ret};
		global.redis.del(`KEYS.R_USER${ctx.request.body.name}`); // 添加后删除缓存
	}
})

// 查询用户列表
router.get('/user', async ctx => {
	let ret = await global.redis.get(KEYS.R_USER_LIST);
	if (ret) {
		ret = JSON.parse(ret);
	} else {
		ret = await user.find({});
		global.redis.set(KEYS.R_USER_LIST, JSON.stringify(ret));
		global.redis.expire(KEYS.R_USER_LIST, config.redisExpire);
	}
	ctx.body = ret;
});

// 用户登录
router.post('/user/login', async ctx => {
	let findUser = await user.find(ctx.request.body);
	if(findUser.length>0) {
		ctx.body = {status:0,message:'用户登录成功', data: findUser };
	}else{
		ctx.body = {status:1,message:'密码或用户名错误', data: null};
	}
});

module.exports = router
