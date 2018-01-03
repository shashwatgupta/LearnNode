var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, extension, callback){
   // console.log(directoryName);
   var extension = "." + extension;
    fs.readdir(directoryName, function ReadContent(err, data) {
        if (err) {
            return callback(err);
        }
        var files = [];
        data.forEach(function (file) {
            if (path.extname(file) == extension)
                files.push(file);
        })
        callback(null, files);
    });    
}