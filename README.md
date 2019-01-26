# 产品

财经类答疑平台

> 热点

```
 最新的问题对应的答疑和最新的评论多的文章
```

> 答疑

```
 财经类问题和对应的答疑
```

> 文章

```
 财经类文章和对应的评论
```

# 技术栈

`vue` `koa2` `redis` `mongoDb` `graylog` `第三方接口聚合`

> vue 

```
 使用的是 vue-cli
```

> koa2

```
 使用的是 koa脚手架
```

> redis

```
 需要安装redis-server本地服务，使用默认的端口
 需要安装对应的node模块 ioredis
```

> mongoDb

```
 需要安装本地服务，并且设置环境变量
 需要安装对应的node模块 mongoose
```

> graylog

```
 需要安装对应的node模块 graylog2，并配置graylog的服务
```

> 第三方接口聚合

```
 使用axios 或者got都可以
```

# 数据模型

> user

  名称 | 类型 | 备注 
 :------|:------|:------
  name | String | 用户名 
 password | String| 密码


> answer

  名称 | 类型 | 备注 
 :------|:------|:------
  title | String | 问题名称 
 like | String | 赞
 stamp | String | 踩
 date | String | 日期
 answer | Array | 回答

 > article

  名称 | 类型 | 备注 
 :------|:------|:------
  uname | String | 用户名 
 title | String | 文章标题
 content | String | 内容
 date |  String | 日期
 comments | Array | 评论
