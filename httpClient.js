var http = require('http');

http.get(process.argv[2],  function callback(response) {
    response.setEncoding("utf8");

    response.on("data", function name(data) {
       console.log(data);    
    });

    response.on("end", function name(end){
        console.log("");
    });

    response.on("error", function onError(err) {
        console.log(err);        
    });

}).on("error",console.error);