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

// const val = 'Vasia@mail.com';
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

// const b = ['Mercury', 'Venus', 'Earth'];
// b.val = 150;
//
// for (let i = 0; i < b.length; ++i)
//     console.log(b[i]);
// console.log('-----');
//
// for (let item of b)
//     console.log(item);
// console.log('-----');
//
// for (let item in b)
//     console.log(b[item]);



// const b = ['Mercury', 'Venus', 'Earth'];
// b.val = 150;
// // b.length = 100;
// // b.length = 2;
// b.length = 0;           // очистка
// console.log(b);


// const arr = new Array(50);
// console.log(arr);


// ===== n-мерные массивы
// const matrix = [
//     [2, 5, 7],
//     [1, 1, 2],
//     [7, 8, 9]
// ];
// console.log(matrix);
// console.log(matrix[1][2]);


// const b = ['Mercury', 'Venus', 'Earth'];
// console.log(String(b));
//
// console.log([] + 5);
// console.log([101] + 5);
// console.log([101, 102] + 5);


// console.log(['vasia'] == 'vasia');



// const b = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', NaN];
// const users = [
//     {id: 101, email: 'vasia@mail.com'},
//     {id: 102, email: 'petya@mail.com'},
//     {id: 103, email: 'dima@mail.com'},
// ];

// ===== splice

// const arr = [1, 3, 5];
// delete arr[1];
// console.log(arr);

// b.splice(2, 1, "VASIA");
// console.log(b);

// b.splice(1, 3);
// console.log(b);

// b.splice(1, 0, "VASIA", "PETYA");
// console.log(b);

// ===== slice
// console.log(b.slice(1, 3));

// ===== concat
// console.log(b.concat(['vasia', 'petya']));

// ===== forEach
// b.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// b.forEach(p => console.log(p));
// b.forEach(console.log);

// ===== IndexOf / lastIndexOf / includes

// console.log(b.indexOf('Earth'));
// console.log(b.includes('Earth'));           // :-)

// ===== find / findIndex
// console.log(b.find((item, index, arr) => {
//     return item === 'Earth';
// }));
//
// console.log(b.find( p => p === 'Earth'));
//
// console.log(users.find(u => u.email === 'petya@mail.com'));

// ===== filter
// onsole.log(users.filter(u => u.id > 101));


// ===== map
// console.log(b.map(item => item.length));

// ===== sort

// const nums = [4, 12, 3, 11, 2];
//
// // nums.sort();
// // console.log(nums);
//
// nums.sort((a, b) => a - b);
// console.log(nums);

// split / join

// reduce
// const nums = [4, 12, 3, 11, 2];
// const res = nums.reduce((sum, item) => sum + item);
// console.log(res);

// isArray()



/////////////////////////////////
//============== Symbol =============

// const a = Symbol();
// const b = Symbol();
// console.log(a === b);
// console.log(a);
// console.log(typeof a);


// const a = Symbol('id');
// const b = Symbol('id');
// console.log(a === b);
// console.log(a.description);


// const id = Symbol();
// const role = 'role';
// const user = {
//     [id]: 101,
//     [role]: 'admin',
//     email: 'vasia@mail.com',
//     'name': 'vasia',
//     34: 'value'
// };
//
// console.log(user);
// console.log(user[id]);
// for (let k in user)
//     console.log(k);


// const id = Symbol();
//
// const user = {
//     'email': 'vasia@mail.com',
//     [id]: 123,
// };


// const a = Symbol.for('a_key');
// const b = Symbol.for('a_key');
// console.log(a === b);
//
// console.log(Symbol.keyFor(a));




// const a = {};
// const b = {};
// console.log(a + b);


// STRING or NUMBER     !!!!!!

// ==== хинт (hint) ==== "string" / "number" / "default"

// const a = {};
// const b = {};

// b[a] = 101;
// console.log(b);

// const val = Number(a);
// console.log(val);
// console.log(+a);


// 1. obj[Symbol.ToPrimitive](hint)
// 2. "string" ==> obj.toString() --> obj.valueOf()
// 3. "number" ==> obj.valueOf() --> obj.toString()


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//
//     [Symbol.toPrimitive](hint) {
//         return hint === 'string' ? `id: ${this.id} email: ${this.email}` : this.id;
//     }
// };
//
// // alert(user);
// // console.log(+user);
// console.log(user + 100);


// const user = {id: 101};
// console.log(String(user));
// console.log(user.valueOf() === user);


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//
//     toString() {
//         return `id: ${this.id} email: ${this.email}`;
//     },
//     valueOf() {
//         return this.id;
//     }
// };
//
// console.log(String(user));
// console.log(+user);
// console.log(user + 100);

// const container = {
//     toString() {
//         return '100';
//     }
// };
//
// console.log(+container);
// console.log(String(container));
// console.log(container + 1);




// итерируемый объект
// const container = {
//     from: 0,
//     to: 10,
//
//     [Symbol.iterator]() {
//         return {                                // <-- возвращается итератор!
//             current: this.from,
//             end: this.to,
//
//             next() {                            // <--
//                 if (this.current <= this.end)
//                     return {
//                         done: false,            // <--
//                         value: this.current++,  // <--
//                     }
//                 else
//                     return {
//                         done: true,
//                     }
//             }
//         }
//     }
// };

// псевдомассив1
// const obj = {
//     0: 'vasia',
//     1: 'petya',
//     length: 2,
// };
//
// // псевдомассив2
// const obj2 = {
//     0: 101,
//     1: 102,
//     length: 2,
// };

// for (let item of container)
//     console.log(item);



// for (let item of "vasia")
//     console.log(item);


// let iterator = container[Symbol.iterator]();
//
// while(true) {
//     let next = iterator.next();
//     if (next.done)
//         break;
//     console.log(next.value);
// }





// const arr = Array.from(obj);
// console.log(arr);
// const arr2 = Array.from(container);
// console.log(arr2);
// console.log(obj2);


// const arr = Array.from(obj2, val => val * 2);
// console.log(arr);

/////////////////////////////////



/////////////////////////////////  Map / Set / WeakMap / WeakSet

// const map = new Map();

// map.set('101', 'vasia');
// map.set(101, 'petya');
// map.set(false, 'dima');
//
// console.log(map);
// console.log(map.get(101));
// console.log(map.size);
//
// console.log(map[1]);
// map[200] = 'test';
// console.log(map[200]);


// const user = {id: 101, email: 'vasia@mail.com'};
// const map = new Map();
// map.set(user, 1000);
// console.log(map);


// const map = new Map();
// map
//     .set(101, 'vasia')
//     .set(102, 'petya');


// const map = new Map([
//     ["vasia", 12000],
//     ["petya", 15000],
//     ["dima", 10000],
// ]);

// console.log(map.keys());

// for (let user of map.keys())
//     console.log(user);
//
// for (let val of map.values())
//     console.log(val);
//
// for (let val of map)
//     console.log(val);


// map.forEach((item, key, m) => {
//
// })


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// }
// ========  Object ----> Map
// console.log(Object.entries(user));
//
// const map = new Map(Object.entries(user));
// console.log(map);

// ========  Map ----> Object
// const map = new Map([
//     ["vasia", 12000],
//     ["petya", 15000],
//     ["dima", 10000],
// ]);
//
// console.log(map);
// const obj = Object.fromEntries(map.entries());
// console.log(obj);


// ---- SET


// const set = new Set();
//
// const val1 = {id: 101};
// const val2 = {id: 102};
// const val3 = {id: 103};
//
// set.add(val1);
// set.add(val2);
// set.add(val3);
// set.add(val1);
// set.add(val1);
//
// console.log(set);
//
// for(let item of set)
//     console.log(item);
//
// set.forEach(item => {
//     console.log(item);
// });


// TASK
// const arr = [12, 45, 76, 12, 45, 45, 10];
//
// console.log(Array.from(new Set(arr)));


////////////////////////////////



////////////////////////////// Деструктуризация //////////

// --- arrays ---

// const arr = ['vasia', 102];
// const[name, id] = arr;
// console.log(name, id);

// const arr = ['vasia', 102, 'vasia@mail.com'];
// const[name, , email] = arr;
// console.log(name, email);

// const[a, b, c] = "lshjfo";
// console.log(a, b, c);

// const user = {};
// [user.name, user.lastname] = "Vasia Ivanov".split(' ');
// console.log(user);

// const user = {id: 101, email: 'vasia@mail.com'};
// for(let[key, value] of Object.entries(user))
//     console.log(`key: ${key}, value: ${value}`);

// let a = 12;
// let b = 24;
// [b, a] = [a, b];
// console.log(a, b);



// const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
// const [p1, , p2, ...other] = planets;
// console.log(p1, p2, other);


// const[a = 'vasia', b = 101] = [];
// console.log(a, b);


// --- objects ---
// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     age: 23,
// };

// const{id, email} = user;
// const{age} = user;
// console.log(id, email, age);

// const{id: identity, email} = user;
// console.log(identity, email);

// const{email = 'no_email', role = 'guest'} = user;
// console.log(email, role);

// const{id: identity = 0, role: roleValue = 'guest'} = user;
// console.log(identity, roleValue);

// const{email: e = 'no_email', ...other} = user;
// console.log(e, other);

// let id;
// let email;
// ({id, email} = user);
// console.log(id, email);


// const unit = {
//     id: 101,
//     title: 'vasia',
//     hp: 50,
//     position: {
//         x: 10,
//         y: 20,
//     },
//     weapon: [
//         'sward',
//         'bow',
//     ]
// };
//
// let {
//     title: name = 'no_name',
//     position: {
//         x: xCoord,
//     },
//     weapon: [
//         priorityWeapon,
//     ],
//     ...other
// } = unit;
//
// console.log(name, xCoord, priorityWeapon, other);
// console.log(unit);


//
// function render({
//     title: t = 'no_title',
//     price: p = 0
// } = {}) {
//     console.log(t, p);
// }
//
// render({
//     id: 101,
//     title: 'vasia',
//     price: 4.5,
// });
//
// render({});
// render();

/////////////////////////////////////////////////////////



///////////////////////// ==== JSON ====

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     role: 'admin',
// }

// console.log(JSON.stringify(user));
//
// console.log(JSON.parse(JSON.stringify(user)));

// console.log(JSON.stringify(user, (k, v) => {
//     return k === 'role' ? undefined : v;
// }));

// console.log(JSON.stringify(user, null, 4));


// const data = '{"id": 101,"title": "vasia","date": "2024-09-25T19:43:12"}';
//
// const obj = JSON.parse(data, (key, val) => {
//     if (key === 'date')
//         return new Date(val);
//     return val;
// });
// console.log(obj);


////////////////////////













