//const data = require('../_helpers/data')
//const users = data.users
let nextId = 6

module.exports = {
    //authenticate,
    getAll,
    //register
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return {};
    // return users.map(u => {
    //     const { password, ...userWithoutPassword } = u;
    //     return userWithoutPassword;
    // });
}

async function register({ username, password, firstName, lastName }) {
    const newUser = {
        id: nextId,
        username,
        password,
        firstName,
        lastName,
        role: 'member'
    }

    users.push(newUser)
    nextId++

    const { pass, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
}
