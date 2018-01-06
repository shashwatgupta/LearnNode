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

var myHome = new Home();
myHome.decoration = "New Decoration";

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
    var z = new x();
    z.prototype = o;
    return z;
}


//var another_home = Object.create(myHome);

var another_home =  Object.beget(myHome);
var another_home2 =  Object.beget2(myHome);
   

console.log(typeof objectLiteral);

// console.log(typeof Home.prototype.prototype);
