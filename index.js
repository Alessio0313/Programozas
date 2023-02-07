// // console.log(`Alessio

// // Samu
// // Döme
// // Noel

// // Marangon Alessio Oscar
// // 2008.04.15
// // 186cm`)


// // console.log(22+13)
// // console.log(22-13)
// // console.log(22*13)
// // console.log(22/13)
// // console.log(22%13)
// // console.log(1.5/30*100)

// // let variable = 15
// // console.log(`A kedvenc számom ${variable}`)

// // let a = 123
// // let b = 526
// // let temp

// //  temp = a
// //  a = b
// //  b = temp
// // console.log(`${a}
// // ${b}`)

// // let suly = 65
// // let magassag = 186
// // console.log(65/186**2)






// // // //kommentek

// // // let variable = 'a'
// // // let variable2 = 12
// // // let variable3 = false

// // // let variable4 = variable2 + 32

// // // variable2 += 32

// // // const constVariable = 12

// // // constVariable = 14

// // // console.log(constVariable)

// let c = 4
// if (c < 5) {
// console.log(`kisebb`)
// } else if(c < 10) {
// console.log(`c egyenlo 10`)
// } else {
// console.log(`hello`)
// }

// // //if(c < 5 || c > 10) {

// // //}
// // //if(c < 5 && c == 3) {

// // //}

// // let d = 22
// // let e = 13
// // let f = (d+e)
// // console.log(f)

// // let g = d-e
// // console.log(g)

// // let h = d*e
// // console.log(h)

// // let i = d/e
// // console.log(i)

// // let j = d%e
// // console.log(j)

// // let óra = 1.5
// // let óraszám = 30
// // let k = óra/óraszám*100
// // console.log(k)

// // let aoldal = 5
// // let boldal = 12
// // let coldal = 6
// // let A = 2*(aoldal*boldal+aoldal*coldal+boldal*coldal)
// // console.log(A)
// // let V = aoldal*boldal*coldal
// // console.log(V)

//  let aciklus = 1
// while (aciklus <= 100) {
//  console.log(aciklus)
//  aciklus++
//  }

// // for (let l = 1; l < 101; l++) {
// // console.log(`for ciklus:`,l);
// // }

//  let bciklus = 0
//  while (bciklus <= 500) {
//      console.log(bciklus)
//     bciklus += 2
//  }

// // let msz = 15;
// // let szorzótábla = 1
// // while (szorzótábla <= 10) {
// //     console.log(`${szorzótábla} * ${msz} = ${szorzótábla*msz}`)
// // szorzótábla++
// // }



// // let n = 4; // row or column count
// // // defining an empty string
// // let string = "";

// // for(let i = 0; i < n; i++) { // external loop
// //   for(let j = 0; j < n; j++) { // internal loop
// //     string += "*";
// //   }
// //   // newline after each row
// //   string += "\n";
// // }
// // // printing the string
// // console.log(string);

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//       string += "*";
//     }
//     else {
//       if(j === 0 || j === n - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// function say() {
//   console.log('hello');
// }

// say()

// function sayhello(a) {
//   console.log('hello', a)
// }

// sayhello('alessio')

// function feladat(num) {
//   return num * 2
// }

// console.log(feladat(3))

//  function osszeadas(num1, num2) {
//    return num1 + num2
//  }

// console.log(osszeadas(1, 2))


 function faktorialis(num3) {
   let result = 1
   for (let l = 1; l <= num3; l++) {
    result *= l
  }
   return result
 }

// console.log(faktorialis(3))
// console.log(faktorialis(4))
// console.log(faktorialis(10))
// console.log(faktorialis(42))
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.floor(Math.random() * 1000));
// console.log(Math.floor(Math.random() * 10));