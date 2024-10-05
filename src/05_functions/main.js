'use strict'

// function f(a, b, ...other) {
//     console.log(a, b);
//
//     console.log(other);
// }
// function f2(...args) {
//     console.log(args);
// }
//
// f(2, 3, 5, 6, 7, 8);
// f2(2, 3, 'vasia', 45, 3);


// function f(a, b) {
//     console.log(arguments);
//
//     let lambda = () => console.log(arguments);
//
//     lambda(1, 1, 1);
// }
// f(3, 5, 6, 7, 8);


// console.log(Math.min(3, 5, 7, 1, 2, 8, 9));
//
// const arr = [3, 6, 7, 8, 1, 2, 3, 4];
// const arr2 = [-4, 3, 4, 5];
//
// console.log(Math.min(...arr, -10, ...arr2));
//
// console.log([...arr, ...arr2]);
//
// const title = 'vasia';
// console.log([...title]);
// console.log(Array.from(title));




// ====== Scope Intro


// let a = 45;
// function f() {
//     console.log(a);
// }
// f();




// const val = 45;
// function f1() {
//
//     f2();
//     function f2() {
//
//     }
//
//
//     f2();
// }
//
// f1();




// function creator() {
//     let count = 0;
//
//     return function() {
//         return ++count;
//     };
// }
//
// const res = creator();
// // console.log(res);
// console.log(res());
// console.log(res());
// console.log(res());



// ===== Лексическое окружение =====

// 1. Environment record
// 2. Ref to outer LE (ссылка на внешнее окружение)


// let a;
// a = 10;
// let b = 12;
//
// const f1 = function() {
//     let a;
//     a = 10;
//     let b = 12;
//
//     const f1 = function() {
//         console.log(a);
//     }
//
//     const f2 = () => console.log(b);
//
//     f1();
//
//     function f0() {
//         let c = 10;
//         console.log(c);
//         console.log(b);
//         console.log(x);
//     }
//     f0();
//
// }
//
// const f2 = () => console.log(b);
//
// f1();
//
// function f0() {
//     let c = 10;
//     console.log(c);
//     console.log(b);
//     console.log(x);
// }
// f0();




// function exec() {
//     let a = 23;
//     function creator() {
//         let count = 0;
//
//         return function() {
//             return ++count;
//         };
//     }
//
//     const res = creator();
//     // console.log(res);
// }
//
// exec();




// function creator() {
//     let count = 0;
//
//     return function() {
//         return ++count;
//     };
// }
//
// console.dir(creator);
//
// const a = creator();
// const b = creator();





// Task 1
// let email = 'vasia@mail.com';
//
// function render() {
//     console.log(`email: ${email}`);
// }
//
// email = 'petya@mail.com';
//
// render();
//
// email = 'dima@mail.com';



// Task 2
// function createLogger() {
//     let path = '1.log';
//
//     return function() {
//         console.log(`log path: ${path}`);
//     }
// }
//
// let path = '2.log';
//
// let logger = createLogger();
//
// logger();



// Task 3
// function Counter() {
//     // this = {};
//
//     let count = 0;
//
//     this.count = 10;
//
//     this.add = function() {
//         this.count = 15;
//         return ++count;
//     }
//
//     this.down = function() {
//         return --count;
//     }
//
//     // return this;
// }
//
// let counter = new Counter();
// console.log(counter.add());
// console.log(counter.add());
// console.log(counter.down());
//
// console.log(counter);




// Task 4
// let name = 'vasia';
//
// if (true) {
//     let role = 'admin';
//
//     function render() {
//         console.log(`name: ${name} role: ${role}`);
//     }
//
//     render();
// }

// render();



// Task 5

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const sum = a => b => a + b;
//
// console.log(sum(3)(4));


// Task 6

// const arr = [3, 6, 2, 6, 9, 8];
//
// function between(from, to) {
//     return function(v) {
//         return v >= from && v <= to;
//     }
// }
//
// console.log(arr.filter( v => v % 2 === 0));
// console.log(arr.filter(between(2, 6)));



// Task 7

// const users = [
//     {id: 101, name: 'vasia', age: 23},
//     {id: 102, name: 'petya', age: 15},
//     {id: 107, name: 'dima', age: 43},
//     {id: 100, name: 'africand', age: 20},
// ];
//
// // function by(field) {
// //     return function(a, b) {
// //         return a[field] > b[field] ? 1 : -1;
// //     }
// // }
//
// function by(field) {
//     return (a, b)  => a[field] > b[field] ? 1 : -1;
// }
//
// // users.sort((a, b) => a.age - b.age);
// users.sort(by('name'));
//
// console.log(users);




// ===== var =====

// function f() {
//     email = 'vasia@mail.com';
//     console.log(email);
//
//     var email;
// }
// f();
// console.log(email);     // ERROR



// function f() {
//     for(var i; i < 10; ++i)
//         console.log(i);
//
//     console.log(i);
// }


// console.log(a);
//
// var a = 23;



// (function() {
//     var a = 34;
//
//
// })();
//
//
// (function() {
//     var a = 45;
//
//
// })();



// function f() {
//     console.log(1);
//
//     var a = 34;
//
//     console.log(a);
// }
// f();




// ========== global object ============

// var a = 23;
// window.aaa = 45;
//
// function aa() {
//
// }
//
// console.log(window);



// ========== function as a object =========
// function a(val) {
//     console.log('test');
// }
//
// const b = function() {
//     console.log('test');
// };
//
// function c(predicate = function() {}) {
//     console.log(predicate.name);
// }
//
// function d(a, b, ...args) {}
//
// console.dir(a);
// console.dir(b);
// c();
// console.dir(d);



// function maker() {
//     function counter() {
//         return ++counter.count;
//     }
//
//     counter.count = 0;
//
//     return counter;
// }
//
// const a = maker();
// a.count = 100;
//
// console.log(a());
// console.log(a());
// console.log(a());



// === NFE ===

// let f = function test() {
//     test();
// }
//
// console.log(test);


// === Function() ===
// const a = new Function('a', 'b', 'return a + b;');
// console.log(a(3, 4));




// ============= setTimeout() / setInterval() ===============

// console.log('test');

// console.log(globalThis);
//
// let res = setTimeout(() => {console.log('test')}, 3000);
//
// console.log(res);
//
// console.log('end');



// setTimeout(() => {console.log('test')}, 0);
// setTimeout(() => {console.log('test')}, 0);
// setTimeout(() => {console.log('test')}, 0);
// setTimeout(() => {console.log('test')}, 0);
// setTimeout(() => {console.log('test')}, 0);
//
// console.log('aaa');
// console.log('aaa');
// console.log('aaa');
// console.log('aaa');
// console.log('aaa');




// let res = setTimeout(() => {console.log('test')}, 3000);
//
// setTimeout(() => clearTimeout(res), 2000);

// let count = 0;
// let timerId = setInterval(() => console.log(++count), 300);
// setTimeout(() => clearInterval(timerId), 2000);



// let timerId = setTimeout(function iteration() {
//     console.log('vasia');
//     timerId = setTimeout(iteration, 2000);
// }, 2000);



// let delay = 3000;
//
// let timerId = setTimeout(function req() {
//     // fetch
//
//     // if (error)
//     //    delay += 500;
//
//     timerId = setTimeout(req, delay);
//
// }, delay);





// ===================  decorators  ==================


// function calc(a) {
//     console.log(`calc() with ${a * 2}`);
//     return a * 2;
// }
//
// function cacheDecorator(fn) {
//     const cache = new Map();
//
//     return function(val) {
//         if (cache.has(val)) {
//             console.log(`from cache ${cache.get(val)}`);
//             return cache.get(val);
//         }
//
//         let result = fn(val);
//
//         cache.set(val, result);
//         return result;
//     }
// }
//
// calc(2);
// calc = cacheDecorator(calc);
// calc(3);
// calc(4);
// calc(3);
// calc(4);




// const user = {
//     getFactor() {
//         return 10;
//     },
//
//     calc(val) {
//         console.log(`calc() with ${val}`);
//         return val * this.getFactor();
//     }
// }
//
// function cacheDecorator(fn) {
//     const cache = new Map();
//
//     return function(val) {
//         console.log(this);
//         if (cache.has(val)) {
//             console.log(`from cache ${cache.get(val)}`);
//             return cache.get(val);
//         }
//
//         let result = fn.call(this, val);
//
//         cache.set(val, result);
//         return result;
//     }
// }
//
// // console.log(user.calc(2));
//
// user.calc = cacheDecorator(user.calc);
//
// console.log(user.calc(3));
// console.log(user.calc(4));
// console.log(user.calc(3));



// function f() {
//     console.log(this.val);
// }
//
// // const user = {
// //     val: 101,
// // }
// // user.f = f;
// // user.f();
//
// const a = {val: 101};
// const b = {val: 202};
//
// f.call(a);
// f.call(b);






// const user = {
//     getFactor() {
//         return 10;
//     },
//
//     calc(a, b) {
//         console.log(`calc()`);
//         return a * this.getFactor() + b;
//     }
// }
//
// function cacheDecorator(fn, hashFn) {
//     const cache = new Map();
//
//     return function() {
//         let key = hashFn(arguments);
//
//         if (cache.has(key)) {
//             console.log(`from cache`);
//             return cache.get(key);
//         }
//
//         console.dir(arguments);
//
//         // let result = fn.call(this, ...arguments);
//         let result = fn.apply(this, arguments);
//
//         cache.set(key, result);
//         return result;
//     }
// }
//
// user.calc = cacheDecorator(user.calc, args => [].join.call(args));
// console.log(user.calc(1, 2));




//====== примеры декораторов =======

// --- Логгер ---
// function logDecorator(fn) {
//     function wrapper(...args) {
//         wrapper.logs.push(args);
//
//         return fn.apply(this, args);
//     }
//
//     wrapper.logs = [];
//
//     return wrapper;
// }
//
// function exec(a, b) {
//     return a + b;
// }
//
// exec = logDecorator(exec);
// console.log(exec(1, 3, 10, 12));
// console.log(exec(6, 7));
// console.log(exec(0, 0));
//
// console.log(exec.logs);



// --- throttle ---

// function throttleDecorator(fn, interval) {
//
//     let lastTime;
//
//     return function() {
//         let lastExecPeriod = Date.now() - lastTime;
//         if (!lastTime || lastExecPeriod >= interval) {
//             fn.apply(this, arguments);
//             lastTime = Date.now();
//         }
//     }
// }
//
// // let i = 0
// // function f() {
// //     console.log(++i);
// // }
// //
// // f = throttleDecorator(f, 1000);
// // for(let i = 0; i < 100e6; ++i)
// //     f();
//
//
// let i = 0
// function f() {
//     console.log(++i);
// }
// f = throttleDecorator(f, 500);
//
// document.addEventListener('mousemove', f);






// --- singleton ---

// function singleton(fn) {
//     let canRun = true;
//     let returnVal;
//
//     return function () {
//         if (canRun) {
//             returnVal = fn.apply(this, arguments);
//             canRun = false;
//         }
//         return returnVal;
//     }
// }
//
// function f() {
//     console.log('f() running');
//     return 10;
// }
//
// f = singleton(f);
// console.log(f());
// console.log(f());
// console.log(f());



// --- debounce ---
// function debounceDecorator(fn, interval) {
//     let timer;
//     return function() {
//         clearTimeout(timer);
//         let args = arguments;
//         let self = this;
//         timer = setTimeout(function callOrigin() {
//             fn.apply(self, args);
//         }, interval);
//     }
// }
//
// let i = 0
// function f() {
//     console.log(++i);
// }
// f = debounceDecorator(f, 500);
//
// document.addEventListener('mousemove', f);





// --- bind() ---

// const user = {
//     email: 'vasia@mail.com',
//     render() {
//         console.log(this.email);
//     }
// }

// user.render();

// setTimeout(function() {
//     user.render();
// }, 1000);

// setTimeout(() => user.render(), 1000);

// let f = user.render;
// f = f.bind(user);
// f();

// function exec() {
//     console.log(this.email);
// }
//
// let f = exec.bind(user);
// f();


// setTimeout(user.render.bind(user), 1000);






// ==== arrow function ====

// const user = {
//     email: 'vasia@mail.com',
//     grades: [7, 9, 10, 12, 5],
//     render() {
//         this.grades.forEach(function(g) {
//             console.log(`email: ${this.email}: ${g}`);
//         }.bind(this));
//     }
// };
//
// user.render();


// const user = {
//     email: 'vasia@mail.com',
//     grades: [7, 9, 10, 12, 5],
//     render() {
//         this.grades.forEach(g => console.log(`email: ${this.email}: ${g}`));
//     }
// };
//
// user.render();




function decorator(f, delay) {
    return function() {
        setTimeout(() => f.call(this, ...arguments), delay);
    }
}

function f(a, b, c) {
    console.log(a, b, c);
}

let df = decorator(f, 2000);
df('vasia', 3, {});




















