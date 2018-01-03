var mymodule = require('./FileModule');

mymodule(process.argv[2],process.argv[3], function(err,data)
 {
     if(err)
     {
         return console.log(err);
     }

     data.forEach(element => {
         console.log(element);       
     });
 }
)