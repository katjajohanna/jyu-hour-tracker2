const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({region:process.env.AWS_REGION})

async function getAll() {
    return dynamo.scan({
        TableName: process.env.DYNAMODB_TABLE_USERS
    })
    .promise()
    .then(users => {
        return users.Items.map(u => {
            const { password, ...userWithoutPassword } = u;
            return userWithoutPassword;
        });
    })
    .catch(err => {
        console.log('Error', err)
        return {}
    })
}

module.exports = {
    getAll
};