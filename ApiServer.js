var http = require('http');
var url = require('url');

function Time(hour, minute, second) {
   this.hour = hour;
   this.minute = minute;
   this.second = second;
}

Time.prototype.toString = function DogString()
{
    var x =  "{\"hour\"" + ":" + this.hour + "," + "\"minute\"" + ":" + this.minute + "," + "\"second\"" + ":" + this.second+ "}";
    return x;
}

var server = http.createServer(function(request, response) {
    var urlData = url.parse(request.url, true);
    var date = new Date(urlData.query.iso)
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if(urlData.pathname == '/api/parsetime')
    {
     // console.log(date.getUTCHours().toString());
     // response.write(date.getUTCHours().toString());
      //response.write(date.getHours);
      var time = new Time(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
      response.write(time.toString());
      
    }

    if(urlData.pathname == '/api/unixtime')
    {
        response.write(date.getTime().toString());
    }


}).listen(process.argv[2]);
