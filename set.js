// 1
let str = 'My name is Samuil';

for(let i in str){
    console.log(str[i]);
}  

// 2
let arr = [1, 2, 3, 4, 5];




for(let i in arr){
    console.log(arr[i]);
}  

// 3

let a = new Set(["renat", "renti", "rento"])

// 4

a.add('a')
a.add('b')
a.add('c')

// 5

// let arr1 = new Set([1, 2, 3, 4, 5])
// 
// arr1.forEach(function value)

const zd5 = new Set([1, 2, 3, 4, 5])
zd5.forEach(function(value) {
  console.log(`Element ${value}`)
})

// 6
let fruits = new Set(['apple', 'banana', 'mango']);

console.log(fruits.values);

// 7,8
console.log(fruits.keys);

// 9
let FirstMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

// 10

FirstMap.set("apple", 500)
FirstMap.set("banana", 300)
FirstMap.set("orange", 100)

console.log(FirstMap);

// 11
let fruits1 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits1.get('apple'));

// 13

let fruits2 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits2.delete('apple')


// 14

let fruits3 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

fruits3.clear()

// 15

let fruits4 = new Map([['apple', 5], ['banana', 10], ['mango', 30]]);

console.log(fruits4.has('apple'));

// 16
let fruits5 = new Set(['apple', 'banana', 'mango']);

fruits5.values()

// 17
let fruits6 = new Set(['apple', 'banana', 'mango']);

fruits6.keys()

// 18

let fruits7 = new Set(['apple', 'banana', 'mango']);

fruits7.entries()