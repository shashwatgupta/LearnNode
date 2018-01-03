var http = require('http');
var bl = require('bl');



var getResponse = function(input, counter) {

 http.get(input, function(response){
    response.setEncoding("utf8");
    response.pipe(bl(function (err, data) {
       if(err){
           return console.error(err);
       }
       console.log(data.toString());
       if(counter < 5) {
         getResponse(process.argv[counter], counter + 1);
       }
    }))
});
}


getResponse(process.argv[2],3);