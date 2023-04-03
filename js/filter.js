const arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
let filter = arr.filter((item, index) => {
    console.log("checkfilter: ", item, index);
    return item > 3
})
console.log('filter', filter);

// 

const arr2 = [
    { name: 'hung1', age: 1 },
    { name: 'hung2', age: 12 },
    { name: 'hung3', age: 13 },
    { name: 'hung4', age: 14 },
    { name: 'hung5', age: 15 },
    { name: 'hung6', age: 16 }
]

let filter2 = arr2.filter((item) => item.age > 14)
console.log("filter2", filter2);

let filter3 = arr2.filter((item) => item.age === 14)
console.log("filter3", ...filter3);
// dùng để tìm kiếm một phần tử trong mảng

let filter4 = arr2.filter((item) => item.age !== 14)
console.log("filter4", filter4);
// dùng để xóa một phần tử trong mảng

let find = arr2.find((item) => item.age > 14)
console.log("find", find);
// 

const array1 = [5, 12, 8, 130, 44];
const index = array1.findIndex((item) => item > 44)
console.log("index", index);
// 

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(0);
console.log("citrus", citrus);
// 

const splice = citrus.splice(2, 4)
console.log("citrus", splice);

// 
const str = "apple,banana,orange";
const arr3 = str.split(",");
console.log('split', arr3);
// 

const arr4 = ['c', 'a', 'd', 'b'];
arr4.sort();
console.log("sort a-z", arr4);

const arr5 = ['c', 'a', 'd', 'b'];
arr5.sort((a, b) => b.localeCompare(a))
console.log("sort z-a", arr5);

const data = [5, 1, 6, 9, 3];
const sort1 = data.sort((a, b) => a - b)
console.log("sort 1-9", sort1)
const sort2 = data.sort((a, b) => b - a)
console.log("sort 9-1", sort2)