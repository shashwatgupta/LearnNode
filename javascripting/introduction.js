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
myHome.color = "Red";
var objectLiteral = {
    name: 'shashwat',
    age: 32
}

Object.beget = function(o) {
    var x = o;
    x.color = "green";
    return x;

}

//var another_home = Object.create(myHome);

var another_home =  Object.beget(myHome);
   

console.log(typeof objectLiteral);

// console.log(typeof Home.prototype.prototype);
