var x = 1;
var y = false;
//label : console.log("\u0067");
function Home() {
    this.color = 'yellow';
    {
        var purchasePrice = '640K';
    }
  //  console.log(purchasePrice);
//    return 
};

Home.prototype.garageSize = function(){
    return 100;
}

var myHome = new Home();
myHome.decoration = "New Decoration";
console.log(myHome.decoration);
delete myHome.decoration;
console.log(myHome.decoration);
for(var property in myHome)
{
    if(typeof myHome[property] !== 'function')
    {
        console.log(property.valueOf());
    }
}


var objectLiteral = {
    name: 'shashwat',
    age: 32
}

Object.beget = function(o)
{
    var x = function(){}
    x.prototype = o;
    x.design = "newdesign";
    return new x();
}


Object.beget2 = function(o)
{
    var x = function(){}
   // x.prototype = o;
    var z = new x();
    x.prototype = o;
    var r = new x();
    return z;
}

var another_home =  Object.beget(myHome);
var another_home2 =  Object.beget2(myHome);
another_home2.prototype = new Home();


