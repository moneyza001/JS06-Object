

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