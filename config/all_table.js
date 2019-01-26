module.exports = {
    // 用户表
    users: `create table if not exists users(
        id int not null auto_increment,
        name varchar(100) not null comment '用户名',
        password varchar(100) not null comment '密码',
        time varchar(100) not null comment '注册时间',
        PRIMARY KEY ( id )
    );`,
} 