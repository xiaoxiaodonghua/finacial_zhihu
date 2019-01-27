const query = require('../mysql');

module.exports = {
    getAnswerList: async () => { // 获取用户答疑列表
        let _sql = `select * from answer where id in (select id from ask)`;
        let arr = await query(_sql);
        let _sql2 = `select * from ask`;
        let data = await query(_sql2);
        data.forEach(o => {
            o.answer = [];
            arr.forEach(j => {
                if(o.id == j.ask_id) {
                    o.answer.push(j);
                }
            })
        })
        return {status: 0, message:'获取答疑数据成功', data};
    },
    addAsk: async (val) => { // 添加提问
        let {title,description} = val;
        let _sql = 'insert into ask (title,description,date) values (?,?,?)';
        let data = await query(_sql, [title, description, new Date(), 0]);
        return {status: 0, message: '提问成功', data};
    },
    addAnswer: async (val) => { // 添加回答
        let {name, content} = val;
        let _sql = 'insert into answer (name,content,ask_id) values (?,?,?)';
        let data = await query(_sql, [name, content,ask_id]);
        return {status: 0, message: '回答成功', data};
    },
    searchDetail: async (id) => { //查询答疑详情
        let _sql = 'select * from ask where id=?';
        let data = await query(_sql, id);
        return {status: 0, message: '查询详情成功', data};
    },
    searchTitle: async (title) => { // 模糊查询
        let _sql = 'select * from ask where title like %?%';
        let data = await query(_sql, title);
        return {status: 0, message: '模糊查询成功', data};
    },  
}