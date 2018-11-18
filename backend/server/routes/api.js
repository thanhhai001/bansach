const express = require('express')
const router = express.Router()
const awssdk = require('aws-sdk')

awssdk.config.update({
    region: "us-west-2",
    endpoint: "http://dynamodb.us-west-2.amazonaws.com"
});

awssdk.config.accessKeyId = 'AKIAJUUZIGGPH25OUP7A';
awssdk.config.secretAccessKey = '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';

let docClient = new awssdk.DynamoDB.DocumentClient();

// POST Item
router.post('/item', (req, res) => {
    let item = req.body
    const table = "BanSach"
    const params = {
        TableName: table,
        Item: item
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.log(err)
            res.json("error")
        } else {
            res.json("success")
            console.log("Added item!");
        }
    });
})
module.exports = router;