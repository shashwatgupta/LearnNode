var Animal = function(namex) {
   this.namex  = namex ;
   this.eat =  function ()   {
       console.log('Eats ' + this.namex);
   }
}

var Cat = function () {
  this.meow = function() {
      console.log('Cat ' + this.namex + ' does meow' );
  }
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;



var cat1 = new Cat();
cat1.meow();
cat1.eat();