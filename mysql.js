const allTable = require('./config/all_table');
const mysql = require('mysql');

// 端口号默认是3306，可以不设置
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password:'liuxiaodong',
    database:'test'
})

// 通用链接方法
let query = function (sql, values) {
    return new  Promise(( resolve, reject) => {
        pool.getConnection(function(err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })
}

let createTable = function (sql) {
    return query( sql, []);
}
for (let key in allTable) {
    createTable(allTable[key]);
}
module.exports = query;