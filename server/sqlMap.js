// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(username, Password) values ( ?, ?)',
        select: ' select * from user',
        del: 'delete from user where username = ?',
        update: 'update user set column = ? where column = ?'
    }
}

module.exports = sqlMap;