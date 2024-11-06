// // Khai báo mảng với các số bất kỳ
// let arr = [10,20,30,40,50,60];

// //Tính tích của các phần tử trong mảng
// let product = arr.reduce((acc, num) => acc * num, 1);
// console.log("Tích của các phần tử trong mảng:", product);

// //Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
// let smallestDivisibleBy2 = arr.filter(num => num % 2 === 0).reduce((min, num) => num < min ? num : min, Infinity);
// console.log("Số nhỏ nhất chia hết cho 2:", smallestDivisibleBy2);

// //Tìm số lớn nhất mà chia hết cho 3 trong mảng
// let largestDivisibleBy3 = arr.filter(num => num % 3 === 0).reduce((max, num) => num > max ? num : max, -Infinity);
// console.log("Số lớn nhất chia hết cho 3:", largestDivisibleBy3);

// //Tính giá trị trung bình của mảng
// let average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
// console.log("Giá trị trung bình của mảng:", average);

// //Lọc ra các số nguyên tố trong mảng
// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// let primes = arr.filter(isPrime);
// console.log("Các số nguyên tố trong mảng:", primes);

// //Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không
// let hasNumberLessThan10 = arr.some(num => num < 10);
// console.log("Mảng có số nhỏ hơn 10:", hasNumberLessThan10);

// //Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không
// let allGreaterThan20 = arr.every(num => num > 20);
// console.log("Tất cả phần tử trong mảng có lớn hơn 20 không:", allGreaterThan20);

// //Nhập vào số n cho đến khi n là 1 số trong mảng
// let n;
// do {
//     n = parseInt(prompt("Nhập vào một số n:"));
// } while (!arr.includes(n));
// console.log("Số nhập vào nằm trong mảng:", n);

// //Sử dụng thuật toán Bubble Sort để sắp xếp phần tử theo thứ tự tăng dần
// function bubbleSort(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (array[j] > array[j + 1]) {
//                 // Hoán đổi phần tử
//                 let temp = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temp;
//             }
//         }
//     }
// }

// let sortedArr = [...arr];
// bubbleSort(sortedArr);
// console.log("Mảng sau khi sắp xếp tăng dần:", sortedArr);

//Bài 5
let arr = [12, 15, 7, 3, 21, 18, 9, 10];
let Giatri = arr.filter(num => num % 2 !== 0);
let TongGiaTri = Giatri.reduce((sum, num) => sum + num, 0);
console.log("Tổng của các số lẻ trong mảng:", TongGiaTri);
