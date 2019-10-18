const hourService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    hourService.saveHour(JSON.parse(event.body))
    .then(hour => {
        console.log('Saved hour', hour)
        callback(null, {
            'statusCode': 200,
            'headers': {},
            'body': JSON.stringify(hour)
        })
    })
    .catch(err => {
        console.log('Error when saving new hour', err)
        callback(null, {
            'statusCode': 400,
            'headers': {},
            'body': JSON.stringify({errors: [err.message]})
        })
    })
});