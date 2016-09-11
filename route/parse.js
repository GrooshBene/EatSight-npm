/**
 * Created by GrooshBene on 2016. 9. 11..
 */

var http = require('http');
var https = require('https');

function setAppKey(appkey, callback) {
    userAppKey = appkey;
    return callback(appkey);
}

function createUserKey(appKey, age, sex, location, callback) {
    var requestOptions = {
        "method": "POST",
        "hostname": "apis.eatsight.com",
        "port": null,
        "path": "/foodinfo/1.0/users",
        "headers": {
            "ds-applicationkey": appKey,
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "2a2c7b4c-de56-b4d0-0860-f7817ccf3f93"
        }
    }

    var req = http.request(requestOptions, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            var response = body.toString();
            return callback(JSON.parse(response));
        });

    });

    req.write(JSON.stringify({age: age, sex: sex, location: location}));
    req.end();
    console.log(age + "," + sex + "," + location);
};

exports.setAppKey = setAppKey;
exports.createUserKey = createUserKey;