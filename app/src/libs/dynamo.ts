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