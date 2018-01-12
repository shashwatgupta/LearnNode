var x = ['w','y','z'];

Array.prototype.contains = function(z) {
    for(var i = 0 ; i < this.length ; i++)
    {
        if(this[i] == z) return true;
    }
    return false;
}



 