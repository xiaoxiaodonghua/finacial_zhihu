module.exports = {
    graylog: {
        servers: [{
            host: 'g01.graylog.gaodunwangxiao.com',
            port: 7008
        }],
        hostname: `FinancialZhihu`
    },
    redis: {
        host: '127.0.0.1', // 安装好的redis服务器地址
        port: 6379, // 端口
        prefix: 'gaodun:', // 存诸前缀
        db: 0
    },
    redisExpire: {
       "single_artical": Math.floor(Math.random() * ((300 + 1 * 60) - 300 + 1) + 300),
       "artical_comments_list": Math.floor(Math.random() * ((900 + 3 * 60) - 900 + 1) + 900),
       "answer_search": Math.floor(Math.random() * ((1800 + 5 * 60) - 1800 + 1) + 1800),
       "answer_list": Math.floor(Math.random() * ((3600 + 10 * 60) - 3600 + 1) + 3600)
    }// redis过期时间（秒）
};
