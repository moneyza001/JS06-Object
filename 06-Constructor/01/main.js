
const calculator = {
    read() {
        this.x = +prompt('Enter num 1');
        this.y = +prompt('Enter num 2');
    },
    sum : function () {
        return this.x + this.y;
    },
    mul : function () {
        return this.x * this.y;
    }
}
function Calculator() {
    this.read = function(){
        this.x = +prompt('Enter num 1');
        this.y = +prompt('Enter num 2');
    };
    this.sum = function () {
        return this.x + this.y;
    };
    this.mul = function () {
        return this.x * this.y;
    }
};
const calculator2 = new Calculator()


