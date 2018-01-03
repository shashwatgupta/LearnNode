var net = require('net');
var format = require('date-format');

net.createServer(function(socket){
    var date = new Date();
    //socket.write(date.getFullYear() + "-" + Number((date.getMonth() + 1)     + "-" + date.getDay() + " "+ date.getHours() +":" + date.getMinutes() );
    socket.end(format.asString("yyyy-MM-dd hh:mm",date));
    
}
).listen(process.argv[2]);