var DateX = function(){
    var diffData =  Date.now() - Date.UTC(1980,10,12) ;

    var AddByOne =  function() {
        diffData = diffData  + 1;
        return diffData;
    }

    this.member = function()
    {
       return AddByOne();
    }
}
var daten = new DateX();
console.log(daten.member());
console.log(daten.member());