const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION })

async function getAll() {
    return dynamo.scan({
        TableName: process.env.DYNAMODB_TABLE_HOURS
    })
    .promise()
    .then(hours => {
        return hours.Items
    })
    .catch(err => {
        console.log('Error', err)
        return {}
    })
}

module.exports = {
    getAll
}