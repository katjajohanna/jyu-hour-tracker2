const hourService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    hourService.deleteHour(event.pathParameters.id)
    .then(() => {
        console.log('Deleted hour with id', event.pathParameters.id)
        callback(null, {
            "statusCode": 200,
            "headers": {},
            "body": JSON.stringify({})
        })
    })
    .catch(err => {
        console.log('Error', err)
        callback(err)
    })
});