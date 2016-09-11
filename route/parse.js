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

function getFoodInfo(foodType, searchField, searchValue, offset, limit, sortField, sortType, imageType) {
    var http = require("https");

    var options = {
        "method": "GET",
        "hostname": "apis.eatsight.com",
        "port": null,
        "path": "/foodinfo/1.0/foods?foodType=" + foodType + "&searchField= " + searchField + "&searchValue=" +searchValue+ "&offset=" + offset + "&limit="+ limit+ "&sortField" + sortField + "&sortType" + sortType+ "&imageType" + imageType,
        "headers": {
            "ds-applicationkey": "c3a5142c-ad30-4589-b67f-9eac3cdfab6c",
            "content-type": "application/json",
            "ds-accesstoken": "a165bdd3-346a-4877-9b22-fb01edd2cb16",
            "cache-control": "no-cache",
            "postman-token": "2c28ead9-523a-9103-e331-8480fa73a0a8"
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });

    req.write(JSON.stringify({ age: '20', sex: 'M', location: '1100000000' }));
    req.end();
}

exports.setAppKey = setAppKey;
exports.createUserKey = createUserKey;