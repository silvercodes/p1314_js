'use strict';


// comment
/*
    comment
    comment
*/
// alert('test');




// === VARIABLES ===

// var a = 1;
// let b = 2;
// const c = 45;

// let d, 
//     e = 1, 
//     f = true;

// b = 'vasia@mail.com';

// let $_ = 45;

// let v;
// let V;

// const ROLE_ID = 12;

// const email = 'vasia@mail.com';





// === TYPES ===

// == Number
// let a = 23;
// let b = 4.5;

// let c = Infinity;
// console.log(1 / 0);
// let d = -Infinity;

// let e = NaN;
// let f = 'vasia' / 45;
// console.log(f);

// console.log(NaN / NaN);


// == BigInt
// let a = 82347927348729345943785983750293479867459n;


// == String
// let a = "st'r'ing1";
// let b = 'string2';
// let c = `string3`;

// const val = 12;
// const str = `String = ${val}`;
// console.log(str);


// == Boolean
// const flag = true;
// console.log(typeof flag);


// == null и undefined

// let a;
// console.log(a);

// let b = null;

// console.log(typeof undefined);
// console.log(typeof null);


// console.log(undefined + 3);         // NaN
// console.log(null + 1);              // 1


// console.log(!!undefined);
// console.log(!!null);


// console.log(undefined == null);         // true
// console.log(undefined === null);        // false



// == Объект


// == Symbol

// const a = Symbol();
// const b = Symbol();





// === TYPE CASTING ===
// String(23);
// Number('45');
// Boolean(45);


// console.dir(String(12));        // '12'
// console.dir(String(-12.45));        // '-12.45'
// console.dir(String(null));        // 'null'
// console.dir(String(undefined));        // 'undefined'
// console.dir(String(true));        // 'true'
// console.dir(String(false));        // 'false'
// console.dir(String(NaN));        // 'NaN'
// console.log(function() {console.log('test');});
// console.log(String({}));        // [object Object]
// console.log(String({id: 123})); // [object Object]
// console.log(String([]));
// console.log(String([1, 2, 3]));




// console.log(Number('345'));
// console.log(Number('345.45'));
// console.log(Number('345,45'));
// console.log(Number(''));
// console.log(Number(null));          // !!!
// console.log(Number(undefined));     // !!!
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(function f() {}));
// console.log(Number({}));            // !!!
// console.log(Number([]));
// console.log(Number([3]));
// console.log(Number(['3']));
// console.log(Number([3, 4, 5]));




// console.log(Boolean(''));                   // false
// console.log(Boolean('string'));
// console.log(Boolean('false'));
// console.log(Boolean(0));                    // false
// console.log(Boolean(23));
// console.log(Boolean(-12));
// console.log(Boolean(NaN));                        // false
// console.log(Boolean(null));                 // false
// console.log(Boolean(undefined));            // false
// console.log(Boolean(function f() {}));
// console.log(Boolean({}));
// console.log(Boolean({id: 34}));
// console.log(Boolean([]));
// console.log(Boolean([0]));




// console.log(5 + '3');
// console.log(5 - '3');
// console.log(5 + '-3');
// console.log(5 - +3);
// console.log(5 + -3);


// ||  &&           -->  bool
// +                -->  string

// < > <= >=        -->  Number
// - + * / %        -->  Number
// +<unary>         -->  Number
// ==               -->  Number






// === OPERATORS ===
// + - * / % ** +-<unary>
// += -= ....

// =
// let a;
// console.log(a = 3 + 5 * 3);

// ++ --

// ,
// let c;
// let b = (c = 3 + 4, 5 + 6);
// console.log(b);


// > < >= <= == === != !==
// let a = 0;
// let b = '0';
// console.log(a == b);

// console.log(12 == '12');
// console.log(12 === '12');

// console.log(null == undefined);             // !!!
// console.log(null === undefined);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);



// if()
// if (variable) {
//
// } else if(false) {
//
// } else {
//
// }

// let res = true ? 12 : 34;



// || && ! ??       ||=  &&= ??=
// console.log(1 || 0);
// console.log(null || 1);
// console.log(null || undefined || 0);

// let email = '';
// let name = 'vasia';
// let pass = '123123';
// console.log(email || name || pass);
//
// let age = 20;
// age <= 18 || f();

// a ||= b;        // a || (a = b)

// let nickname = '';
// nickname ||= 'no_name';


// let email = 'vasia@mail.com';
// let name = '';
// let pass = '123123';
// console.log(email && name && pass);
//
// a &&= b             // a && (a = b)

// let name = 'Vasia';
// name &&= `User: ${name}`;
// console.log(name);


// console.log(!!34);


// res = a ?? b                  // res = (a !== null && a !== undefined) ? a : b;

// let name = 'Vasia';
//
// name = name ?? 'no_name';


// let name = 'Vasia';
//
// name ??= 'no_name';         // name = name ?? 'no_name'



// while/do_while    for        for in      for off
// for (let i = 0; i < 10; ++i)
//     console.log(i);


// vasia: for (let i = 0; i < 10; ++i) {
//     for (let j = 0; j < 5; ++j) {
//         if (i + j === 7)
//             break vasia;
//     }
// }



// let a = 2;
// switch (a) {
//     case 1:
//         //
//         break;
//     case 2:
//         //
//         break;
//     case 3:
//     case 4:
//         //
//         break;
//     case a + 10:
//         //
//         break;
//     default:
//         //
// }




















