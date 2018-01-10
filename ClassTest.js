var rectangle = function () {
    var length = 0;
    var width = 0;
    return { 
        area: function () { return   length * width },
        changeLength : function(newLength) { length = newLength ; return this;},
        changeWidth : function(newWidth) { width = newWidth ; return this;},
        Parameter : function() { return (length + width)*2 ;},
        z:5
    }
}

var x = rectangle();
x.changeLength(2);
x.changeWidth(5);
console.log(x.area());
console.log(x.Parameter());

var y = rectangle();
console.log(y.area());

console.log(x.area());

console.log(x.changeLength(5).changeWidth(8).area());