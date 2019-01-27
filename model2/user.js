const query = require('./../mysql');

module.exports = {
    findUserList: async () => {
        let _sql = `SELECT * FROM users`;
        let data = await query(_sql);
        return data;
    },
    postUser: async (value) => {
        let { name, password } = value;
        let _sql = `SELECT * FROM users WHERE name=?`;
        let finduser = await query(_sql,name);
        if (finduser.length > 0) {
            return { status: 1, message: '该用户已存在', data: null};
        } else {
            let _sql2 = "insert into users(name,password,time) values(?,?,?)";
            let data = await query(_sql2, [name, password, new Date()]);
            return { status: 1, message: '该用户已存在', data: data};
        }
    },
    userLogin: async (value) => {
        let {name, password} = value;
        let _sql = `SELECT * FROM users WHERE name=?`;
        let arr = await query(_sql,name);
        if( arr[0].password == password) {
            return { status: 0, message: '登陆成功', data:arr};
        };
        return { status: 1, message: '密码或用户名错误'};

    }
}