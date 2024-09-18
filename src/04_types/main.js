'use strict'

// ====== Number ======
// const val = 34.887674;
//
// console.log(typeof 23);
// console.log(typeof new Number(23));


// ==== Number
// console.log(val.toFixed(2));
// const a = 1_000_345_987;
// const b = 3.4e2;
// const c = 3.4e-2;

// const val = 77;
// console.log(val.toString(2));
// console.log(val.toString(16));

// console.log(Math.floor(5.8));  // <--
// console.log(Math.floor(-5.8));  // <--
//
// console.log(Math.ceil(5.3));  // -->
// console.log(Math.ceil(-5.3));  // -->
//
// console.log(Math.round(5.5));  // <-->
//
// console.log(Math.trunc(5.8));
// console.log(Math.trunc(-5.8));


// const val = NaN;
// console.log(isNaN(val));
// // console.log(val === NaN);
// console.log(Number.isNaN(val));
//
// const val2 = 8976345;
// console.log(isFinite(val2));
// console.log(isFinite('765'));
// console.log(Number.isFinite('765'));
//
// const val3 = Infinity;
// console.log(isFinite(val3));


// const val = '200px';
// const val2 = '1.2vw';
// console.log(+val);
// console.log(parseInt(val));
// console.log(parseFloat(val2));


// console.log(Math.random());
// Math.min(2, 4, 5, 6);
// Math.max(2, 4, 5, 6);




// ===== String =====
// const str = '\n\'';

const val = 'Vasia@mail.com';
//
// console.log(val.length);
//
// console.log(val.at(3));
// console.log(val[3]);
// console.log(val.at(-3));
// console.log(val[-3]);

// for(let ch of val)
//     console.log(ch);

// val[3] = 'R';
// console.log(val);


// console.log(val.toUpperCase());
// console.log(val.toLowerCase());


// console.log(val.indexOf('@'));
// console.log(val.indexOf('@', 3));
// console.log(val.lastIndexOf('@', 3));


// console.log(val.slice(5));
// console.log(val.slice(5, 7));
// console.log(val.slice(-4));
//
// console.log(val.substr(2, 5)); // :-(
//
// console.log(val.substring(6, 2)); // :-(
//
// console.log(val.slice(val.indexOf('.')));

// console.log(val.repeat(3));




// ====== Array ======

// const arr = new Array();
// const a = [];
//
// const b = ['Mercury', 'Venus', 'Earth'];
//
// const c = [2, 'Vasia', {id: 102}];
//
// console.log(b[0]);
// b[0] = 'Moon';
//
// console.log(b.length);

// console.log(b);
// console.dir(b);
// console.log(c);

// console.log(b[b.length - 1]);
// console.log(b.at(-1));


//=====  pop push shift unshift

// const arr = [];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);


// ===== Перебор

const b = ['Mercury', 'Venus', 'Earth'];
b.val = 150;

for (let i = 0; i < b.length; ++i)
    console.log(b[i]);
console.log('-----');

for (let item of b)
    console.log(item);
console.log('-----');

for (let item in b)
    console.log(b[item]);























