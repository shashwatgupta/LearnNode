var Person = function(name,age) {
    this.name = name;
    this.age = age;
    this.PrintNameAndAge = function() {
        console.log(this.name + "x  " + this.age);
    }
}

var Teacher = function(name, age, subject) {
    this.teaches = subject;
    this.name = name;
    this.age = age;    
    this.PrintMessage = function()    {
        console.log('person ' + this.name + " " + this.age + " " + this.teaches);
    }
}

Teacher.prototype = new Person();
var t1 = new Teacher('Shashwat', 32, 'Physics');
t1.PrintMessage();
t1.PrintNameAndAge();
