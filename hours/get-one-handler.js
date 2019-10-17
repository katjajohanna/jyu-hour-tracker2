const hourService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    hourService.get(event.pathParameters.id)
    .then(hour => {
        console.log('Got hour', hour)
        callback(null, {
            "statusCode": 200,
            "headers": {},
            "body": JSON.stringify(hour)
        })
    })
    .catch(err => {
        console.log('Error', err)
        callback(err)
    })
});