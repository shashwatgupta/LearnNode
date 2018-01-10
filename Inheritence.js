var DateX = function (d, m, y) {
    this.day = d;
    this.m = m;
    this.y = y;

    this.IncreaseOneDay = function () {
        if (this.day <= 30) {
            this.day = this.day+ 1;
        }
        else {
            this.day = 1;
            if (this.m <= 12) {
                this.m = this.m + 1;
            }
            else { 
                this.m = 1;
                this.y = this.y + 1;
            }
        }
    }
   // return this;
}

var d = new DateX(10, 11, 12);
var d2 = new DateX(1, 11, 12);

d.IncreaseOneDay();
console.log(d.day);

