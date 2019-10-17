const hourService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    hourService.updateHour(event.pathParameters.id, JSON.parse(event.body))
    .then(hour => {
        console.log('Updated hour', hour)
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