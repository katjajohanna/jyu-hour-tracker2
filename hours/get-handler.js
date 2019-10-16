// const hourService = require('./service')

module.exports.handler = ((event, context, callback) => {
    console.log(event)

    callback(null, {
        "statusCode": 200,
        "headers": {},
        "body": JSON.stringify({})
    })

    // hourService.getAll()
    // .then(hours => {
    //     console.log('Got hours', hours)
    //     callback(null, {
    //         "statusCode": 200,
    //         "headers": {},
    //         "body": JSON.stringify(hours)
    //     })
    // })
    // .catch(err => {
    //     console.log('Error', err)
    //     callback(err)
    // })
});