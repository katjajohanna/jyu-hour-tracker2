const userService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    // Make intentionally slow to trigger an alarm
    const now = new Date().getTime();
    while (new Date().getTime() < now + 50) {
        // wait
    }

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