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

var Student = function (nameX, age) {
    this.nameX = nameX;
    this.age = age;
  }

Function.prototype.new = function() {
    var obj =  {};
    obj.nameX = this.nameX;
    obj.age = this.age;
    obj.__proto__ = this.prototype;
    return obj;
}


var x = Student.new();
var y = new Student();
console.log('h');