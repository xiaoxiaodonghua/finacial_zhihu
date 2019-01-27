module.exports = {
    // 用户表
    users: `create table if not exists users(
        id int not null auto_increment,
        name varchar(100) not null comment '用户名',
        password varchar(100) not null comment '密码',
        time varchar(100) not null comment '注册时间',
        PRIMARY KEY ( id )
    );`,
    ask: `create table if not exists ask(
        id int not null auto_increment,
        title varchar(100) not null comment '标题',
        description varchar(100) not null comment '描述',
        likes varchar(100) not null default '0' comment '点赞',
        date varchar(100) not null comment '日期',
        primary key ( id )
    );`,
    answer: `create table if not exists answer(
        id int not null auto_increment,
        name varchar(100) not null comment '名称',
        content varchar(100) not null comment '内容',
        ask_id varchar(100) not null comment '关联提问id',
        primary key ( id )
    );`
} 