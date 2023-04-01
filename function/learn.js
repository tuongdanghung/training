function sum(a, b) {
    return a + b
}

console.log('sum', sum(5, 6));


function giaithua(number) {
    var sum = 1
    for (let i = 1; i <= number; i++) {
        sum *= i
    }
    return sum
}

const newGiaithua = giaithua(6);
console.log("newGiaithua", newGiaithua);

var newFunction = function (x, y) {
    return x + y
}

console.log("var newFunction", newFunction(2,3));
