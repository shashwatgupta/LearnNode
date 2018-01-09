var x = 2.4;

Number.prototype.GetInteger = function()
{
    return Math.floor(this);
}

console.log(x.GetInteger());



Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

function Foo()
{
};

Foo.method('test', function() {
    return "This is a test!";
});

var f = new Foo();

console.log(f.test());

