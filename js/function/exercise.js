//b1: Viết một function sử dụng vòng lặp for để tính tổng của các số từ 1 đến n.Hàm sẽ nhận đầu vào là một số nguyên dương n.

// const number = prompt()
// const newNumber = parseInt(number)
// // var sum = 1
// function numberFunciton(params) {
//     var sum = 1
//     // console.log(params);
//     for (let i = 1; i <= params; i++) {
//         console.log(`vong chay${i} :`, sum, " ------ ", i);
//         sum = sum + i
//     }

//     return sum
// }

// console.log("so nguyen duong", numberFunciton(newNumber));



// b2 Viết một function để tìm bội chung nhỏ nhất của hai số nguyên dương. Hàm sẽ nhận đầu vào là hai số nguyên dương a và b.

// const number1 = prompt()
// const number2 = prompt()
// const newNumber1 = parseInt(number1)
// const newNumber2 = parseInt(number2)

// function leastCommonMultiple(num1, num2) {
//     let gcd = (num1, num2) => num1 ? gcd(num2 % num1, num1) : num2; // tìm ước chung lớn nhất giữa 2 số a và b
//     let lcm = (num1 * num2) / gcd(num1, num2); // tính bội chung nhỏ nhất của a và b
//     return lcm;
// }
// console.log("boi chung nho nhat, uoc chung lon nhat", leastCommonMultiple(newNumber1, newNumber2));



//b3 Viết một hàm để kiểm tra xem một số có phải số nguyên tố hay không. Đầu vào của hàm là một số nguyên dương và đầu ra là True nếu số đó là số nguyên tố và False nếu không.

// const number = prompt()
// const newNumber = parseInt(number)
// function soNguyenTo(num) {
//     if (num < 2) {
//         return false;
//     }
//     ;
//     for (var i = 2; i <= Math.sqrt(num); i++) {
//         // console.log(i)
//         // console.log(num)
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log("so nguyen to : ", soNguyenTo(newNumber));



// b4 Viết một hàm để tính tổng các số chẵn từ danh sách các số được cung cấp.
// Đầu vào của hàm là một danh sách các số nguyên và đầu ra là tổng các số chẵn được tìm thấy trong danh sách đó.

// const number = prompt()
// const newNumber = parseInt(number)
// function tongSoChan(params) {
//     var num = 1
//     for (let i = 1; i < params; i++) {
//         if (i % 2 === 0) {
//             num *=  i
//         }
//     }
//     return num
// }


// console.log("tong So Chan : ", tongSoChan(newNumber));



//b5 Viết một hàm để in ra tất cả các số nguyên tố nhỏ hơn hoặc bằng một số nguyên dương n.

// const number = prompt()
// const newNumber = parseInt(number)
// function tongSoChan(params) {
//     var num = 1
//     for (let i = 1; i < params; i++) {
//         console.log("🚀 ~ file: exercise.js:86 ~ tongSoChan ~ i:", i)
//     }
//     return num
// }
// console.log("tong So Chan : ", tongSoChan(newNumber));

const b = function tinh_tong(a, b) {
    return a + b;
}

const a = 1;
const c = 2;
console.log(b(a, c));
