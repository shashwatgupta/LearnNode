var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, data) {
    var counter = 0;
    if (err) {
        return console.log(err);
    }
    data.forEach(function (file) {
        if (path.extname(file) == "." + process.argv[3])
            console.log(file)
    })

})