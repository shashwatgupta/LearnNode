var array = [1,2,3,4,5,6,7,8,9,10];
var evenNumber = array.filter(function(number) {
    if(number%2==0)
     return number;
});

console.log(evenNumber);
