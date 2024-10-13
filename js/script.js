// oson masalalar
// 1-misol
// function kvadrat(son) {
//     return son * son;
// }
// let num = +prompt(`sonni kiriting`)

// let natija = kvadrat(num)
// console.log(natija);

// 2-misol
// function yigindi(a,b) {
//     return a+b;
// }
// let a=+ prompt(`A- sonni kiriting`)
// let b=+ prompt(`B- sonni kiriting`)
// let sum = yigindi(a,b)
// console.log(sum);

// 3-misol
// function salom(ism) {
//     return `salom ` + ism + ` !`
// }
// let user =prompt(`ismingizni kiritng`);
// let natija = salom(user);
// console.log(natija);

// 4-misol
// function kattaSonniTopish(a,b) {
//     if (a>b) {
//         return a;
//     }else{
//         return b;
//     }

// }
// let A = +prompt(`A-sonni kiriting`);
// let B = +prompt(`B-sonni kiriting`);

// let natija = kattaSonniTopish(A,B)
// console.log(natija);

// 5-misol
// function yigindi(massiv) {
//   let sum = 0;
//   for (let i = 0; i < massiv.length; i++) {
//     sum += massiv[i];
//   }
//   return sum;
// }
// let sonlar = [1, 2, 3, 4, 5];
// let umumiyYigindi = yigindi(sonlar);
// console.log(umumiyYigindi);

// 6-misol
// function Positiv(arg) {
//     if (arg > 0) {
//         return `musbat`;
//     }else{
//         return `musbat emas`;
//     }

// }

// let num = +prompt(`sonni kiritng`);
// let natija = Positiv(num);
// console.log(natija);

// 7-misol
// function text(soz) {
//     return soz.length;
// }
// let matn = prompt(`biror soz kiriting`);

// let natija = text(matn);
// console.log(natija);

// 8-misol
// function str(a,b) {
//     let sum;
//     sum=a.concat( ` `,b);
//     return sum;
// }
// let str1=`salom`;
// let str2 = `qalesan`;
// let natija = str(str1,str2);
// console.log(natija);

// 9-misol
// function min(num) {

//     return  Math.min(...num);
// }
// let numbers =[10,2,3,4,5,6,7];
// let natija =min(numbers);
// console.log(natija);

// 10-misol
// function teskari(matn) {
//     return matn.split('').reverse().join('');

// }
// let text = prompt(`matin kiritng`)
// let natija = teskari(text)
// console.log(natija);

//                               qiyin misolllar
// 1-misol
// function massiv(son) {
//     for (let i = 0; i < son.length; i++) {
//        console.log(son[i]);

//     }

// }
// let num = [1,2,3,4,5,6,7,8];
// let natija = massiv(num);

// 2-misol
// function katta(max) {
//     return Math.max(...max);
// }
// let num =[1,2,34,5,67,876,767890,67890];
// let natija = katta(num);
// console.log(natija);

// 3-misol
// function counter(massiv) {
//     return massiv.length;
// }
// let num= [1,2,3,4,5,6,7,22];
// let natija = counter(num);
// console.log(natija);

// 4-misol
// function massiv(son) {
// let sum = 0;

//     for (let i = 0; i < son.length; i++) {
//         sum += son[i];
//     }
//     return sum
// }
// let num = [1,2,3,4,5,6,7,8];
// let natija = massiv(num);
// console.log(natija);

// 5-misol
// function elementHisobla(massiv, element) {
//   let count = 0;
//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] === element) {
//       count++;
//     }
//   }
//   return count;
// }

// let sonlar = [5, 10, 5, 20, 5, 25];

// let Element = 5;
// let uchrashganSoni = elementHisobla(sonlar, Element);
// console.log(uchrashganSoni + " marta uchraydi");

// 6-misol
// function toqSon(massiv) {
//   let Massiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//    if (massiv[i]%2==1) {
//     Massiv.push(massiv[i]);
//    }
//   }
//   return Massiv;
// }

// let sonlar = [5, 10, 15, 20, 25];

// let Sonlar = toqSon(sonlar);
// console.log(Sonlar);

// 7-misol
// function teskariTartib(massiv) {
//   let teskariMassiv = [];
//   for (let i = massiv.length - 1; i >= 0; i--) {
//     teskariMassiv.push(massiv[i]);
//   }
//   return teskariMassiv;
// }

// let sonlar = [5, 10, 15, 20, 25];

// let teskariSonlar = teskariTartib(sonlar);
// console.log( teskariSonlar);

// 8-misol
// function manfiy(massiv) {
//   let Massiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//    if (massiv[i] < 0) {
//     Massiv.push(massiv[i]);
//    }
//   }
//   return Massiv;
// }

// let sonlar = [5, -10, 15, -20, -1];

// let Sonlar =manfiy(sonlar);
// console.log(Sonlar);

// 9-misol
// function Ochirish(massiv) {
//     massiv.pop();
//     return massiv
// }
// let num = [1,2,3,4,5,6,23];
// let natija = Ochirish(num);
// console.log(natija);

// 10 misolni
// function Ochirish(massiv) {
//     massiv.unshift(`salom`);
//     return massiv
// }
// let num = [1,2,3,4,5,6,23];
// let natija = Ochirish(num);
// console.log(natija);

// 11 - misol
// function plus(a, b) {

//  let sum = a.concat(b);
//   return sum;
// }
// let a = [1,2,3,4];
// let b = [5,6,7,8];
// let natija = plus(a, b);
// console.log(natija);

// 12-misol
// function kvadratlar(massiv) {
//     let kvadratMassiv = [];
//     for (let i = 0; i < massiv.length; i++) {
//         kvadratMassiv.push(massiv[i] ** 2);
//     }
//     return kvadratMassiv;
// }

// let sonlar = [1, 2, 3, 4, 5];

// let natija = kvadratlar(sonlar);
// console.log("Sonlarning kvadratlari:", natija);

// 13-misol
// function toqSonlar(massiv) {
//   let yangiMassiv = [];
//   for (let i = 0; i < massiv.length; i++) {
//     if (massiv[i] % 2 !== 0) {
//       yangiMassiv.push(massiv[i]);
//     }
//   }
//   return yangiMassiv;
// }

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let natija = toqSonlar(sonlar);
// console.log("Yangi massiv", natija);

// 14-misol
// function kattaHarfgaOzgartirish(massiv) {
//     let yangiMassiv = []; 
//     for (let i = 0; i < massiv.length; i++) {
//         if (typeof massiv[i] === 'string') { 
//             yangiMassiv.push(massiv[i].toUpperCase()); 
//         } else {
//             yangiMassiv.push(massiv[i]); 
//         }
//     }
//     return yangiMassiv; 
// }


// let Massiv = [1, 'salom', 2, 'dunyo', 3, 'javascript', 4];

// let natija = kattaHarfgaOzgartirish(Massiv);
// console.log("Yangi massiv (stringlar katta harfga o'zgartirilgan):", natija);


// 15-misol
function uzunlikHisobla(massiv) {
    let uzunlikMassivi = []; 
    for (let i = 0; i < massiv.length; i++) {
        if (typeof massiv[i] === 'string') { 
            uzunlikMassivi.push(massiv[i].length); 
        } else {
            uzunlikMassivi.push(0);
        }
    }
    return uzunlikMassivi; 
}

let Massiv = [1, 'salom', 2, 'dunyo', 3, 'javascript', 4];

let natija = uzunlikHisobla(Massiv);
console.log("Elementlarning uzunliklari:", natija);

