function Teacher(name, subject){
    this.name = name,
    this.subject = subject
}



var t1 = new Teacher('ramesh','physics');
var t2 = new Teacher('suresh','maths');
t1.welcome = function()
{
    console.log('welcome ' + this.name);
}
t1.hasOwnProperty('name');
t1.welcome();
