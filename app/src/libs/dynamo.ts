import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient({
    'region': 'us-east-1',
})

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