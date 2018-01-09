// 4 type of Invocation of function. These Ivocation differs in a way 
// they take 'this'
// 1.  Apply and call Invocation

var address = {
    houseNo :  2919,
    street: '2919 180th PL SE',
    city: 'Bothell'
}

var printName = function (firstName, lastName){
  console.log('Hello ' + firstName + " " + lastName + " " + this.city);
}

printName.apply(address, ['shashwat', 'gupta']);


// 2.  Method Invocation method
//When a function is stored as a property of an object, we call it a method. 

var objectLit = {
    a : 10,
    b : 20,
    c : function() { return this.a + this.b; }
}

console.log(objectLit.c());

var value = 500;
// 3.  Function Invocation Method
var  cdPlayer = function (speed){
   return 2 * speed;
}

console.log(cdPlayer(10));


// 4. Using new

var obj = { 
    d : 2,
    c : 4
}

var Date = function(month, day) {
    this.month = month,
    this.day = day
   // return obj;
}

var d = new Date(12, 20);
console.log(d);

