const userService = require('./service');

module.exports.handler = ((event, context, callback) => {
    userService.getAll()
        .then(users => {
            callback(null, users)
        })
        .catch(err => {
            console.log('Error', err)
            callback(err)
        });
});