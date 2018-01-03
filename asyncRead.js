var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function callback(err, buffer) {
    if(err) {
        console.log('some error occoured');
        return console.log(err);
    }
    console.log(buffer.split('\n').length   - 1);

});

