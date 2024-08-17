//  var io = require('socket.io')

var userList = class UserList {
    constructor() {
        this.userList = [];

    }
    authUser(userObj, socket) {

        if (this.userList.length > 0) {
            var flag = false;
            for (var users of this.userList) {
                if (users.nick === userObj.nick) {
                    socket.emit('invalid_user', 'please enter another name', false);
                    flag = true;
                    break;
                }
            }
            if (!flag) {

                this.addUser(userObj, socket)
                socket.emit('invalid_user', 'ok', true);
            }

        } else {
            this.addUser(userObj, socket)
            socket.emit('invalid_user', "ok", true);
        }

    }
    addUser(user, socket) {
        socket.emit('newUserList', this.getFreeUserList());
        this.userList.push(user);
        // console.log(this.userList);
        socket.broadcast.emit('newUserList', this.getFreeUserList());
    }
    getFreeUserList() {
        var freeUsers = []
        for (let user of this.userList) {
            if (user.isPlaying != true) {
                freeUsers.push(user);
            }
        }
        return freeUsers;


    }
    getUserSetPlaying(player) {
        for (var item of this.userList) {
            if (item.nick == player) {
                item.isPlaying = true;
                return item;
            }
        }
    }
}

var users = class Users {

    constructor(nick, socket, isPlaying) {
        this.nick = nick;
        this.socket = socket;
        this.isPlaying = false;
    }
}
module.exports = { users, userList };
//  module.exports = users;