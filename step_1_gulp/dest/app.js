var hellow = (function () {
    function hellow() {
    }
    hellow.prototype.print = function () {
        console.log('First Typescript step');
    };
    return hellow;
})();
var obj = new hellow();
obj.print();
