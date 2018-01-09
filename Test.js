var object = {
    a: 2,
    b: 3,
    c: 4,
    d: function(){
        console.log('hello');
    e: 
    }
}
var o = new Object();
for(var property in object){
  o[property] = object[property];
}

o.a = 5;
o.d = function(){ console.log("bye");}
console.log(object.d());