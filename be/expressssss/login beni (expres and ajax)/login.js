var myUserName = 'bin';
var myPassword = 'gr';
var currentPage = '/';

var loggedIn = false;

function loggedInCheck(req, res) {
    if (loggedIn) {
        return true;
    }

    currentPage = req.url;
    res.redirect('/login');
    return false;
}

function validate(username, password) {

    if (username !== myUserName) {
        return ({ status: 'wrong username, please try again' });
    }
    if (password !== myPassword) {
        return ({ status: 'wrong password, please try again' });
    }
    loggedIn = true;
    return ({ status: 'success', redirect: currentPage })

}

module.exports = {
    loggedInCheck: loggedInCheck,
    validate: validate
}