var parse = require('./route/parse.js');

parse.createUserKey('c3a5142c-ad30-4589-b67f-9eac3cdfab6c', '20', 'M', '1100000000', function (result) {
    console.log(result);
});

parse.setAppKey("asdf", function (result) {
    console.log(result);
})