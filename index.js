const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "NOPE",
    secretAccessKey: 'NOPE',
    useAccelerateEndpoint: true,
});

exports.handler = (event) => {

    let args = event.body;
    let name = args.name;
    let file = args.file;

    var params = {
        Bucket: 'mycloudproject1',
        Key: name,
        Body: file,
    };
    console.log("Begin Upload");
    s3.upload(params, function (s3Err, data) {
        if (s3Err) {
            console.log(s3Err);
            const response = {
                statusCode: 200,
                body: {
                    message: "Failed upload",
                    data: s3Err
                }
            };
            return response;
        }
        let message = `File uploaded successfully at ${data.Location}`;
        const response = {
            statusCode: 200,
            body: {
                message: "Success upload",
                data: data
            }
        };
        console.log(message);
        return response;
    });
};

//handler();