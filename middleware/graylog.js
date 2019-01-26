let graylog2 = require("graylog2");
let config = require('../config');

let graylog = new graylog2.graylog(config.graylog);

module.exports = () => {
    return async (ctx, next) => {
        let start = new Date();
        await next();
        let ms = new Date() - start;
        graylog.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
    };
};