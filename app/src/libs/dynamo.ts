import * as AWS from 'aws-sdk'

AWS.config.update({ region: 'us-east-1' })

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName: any) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        } else {
            console.log(err)
        }
    })
}

export const putData = (tableName: any, data: any) => {
    var params = {
        TableName: tableName,
        Item: data
    }
    
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}