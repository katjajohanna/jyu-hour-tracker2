const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION,
    apiVersion: '2012-08-10'
})

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

async function get(id) {
    return dynamo.get({
        TableName: process.env.DYNAMODB_TABLE_HOURS,
        Key: {id}
    })
    .promise()
    .then(hour => {
        return hour.Item
    })
    .catch(err => {
        console.log('Error', err)
        return {}
    })
}

async function updateHour(id, { projectId, hours, description }) {
    let updateExpressions = [];
    let expressionAttributeValues = {}

    if (projectId != undefined) {
        updateExpressions.push('projectId = :pid')
        expressionAttributeValues[":pid"] = projectId
    }

    if (hours != undefined) {
        updateExpressions.push('hours = :h')
        expressionAttributeValues[":h"] = hours
    }

    if (description != undefined) {
        updateExpressions.push('description = :desc')
        expressionAttributeValues[":desc"] = description
    }

    const params = {
        TableName: process.env.DYNAMODB_TABLE_HOURS,
        Key: { id },
        ExpressionAttributeValues: expressionAttributeValues,
        UpdateExpression: 'SET ' + updateExpressions.join(', ')
    }

    console.log(params)

    return dynamo.update(params)
        .promise()
        .then(() => {
            return get(id)
        })
        .catch(err => {
            console.log('Error', err)
            return {}
        })
}

module.exports = {
    getAll,
    get,
    updateHour
}