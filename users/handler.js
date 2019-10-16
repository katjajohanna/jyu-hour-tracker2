const userService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    userService.getAll()
    .then(users => {
        console.log('Got users', users)
        callback(null, {
            "statusCode": 200,
            "headers": {},
            "body": JSON.stringify(users)
        })
    })
    .catch(err => {
        console.log('Error', err)
        callback(err)
    })
});