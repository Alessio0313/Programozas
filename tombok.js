//let array1 = {1, 2, 3, 4};
// const array = [1, 2, 3, 4];
// console.log(array);
// console.log(array[0]);
// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// array.forEach((element) => {
//     console.log(element)
// });

// const sumwith2 = array.map((element) => element +2);
// console.log(sumwith2)

let array = [1, 4, 5, 7];
console.log(array[2]);

console.log(array[0] + array[2]);

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
};

array.forEach((element) => {
    console.log(element)
});

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1){
        console.log(array[i])
    }
};

array = array.map((element) => element +1);
console.log(array)