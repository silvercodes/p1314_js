'use strict';


// ==== PROPERTY-DATA

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };
//
// const d1 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log(d1);
//
// Object.defineProperty(user, 'email', {
//     writable: false,
// });
//
// const d2 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log(d2);
//
// // user.email = 'petya@mail.com';   // ERROR
//
// Object.defineProperty(user, 'email', {
//     enumerable: false,
// });
//
// const d3 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log(d3);
//
// for (let key in user)
//     console.log(key);
//
// Object.defineProperty(user, 'email', {
//     configurable: false,
// });
//
// const d4 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log(d4);


// console.log(Math);
// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));


// console.log(Object.getOwnPropertyDescriptors(Math));




// const obj = Object.defineProperties({}, {
//     id: {
//         value: 101,
//         writable: true,
//         configurable: true,
//     },
//     render: {
//         value: function() {console.log(this.id);},
//         configurable: true,
//     }
// });
//
// console.log(Object.getOwnPropertyDescriptors(obj));



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };
//
// // Object.seal(user);
// // console.log(Object.getOwnPropertyDescriptors(user));
// // user.id = 102;
//
// Object.freeze(user);
// console.log(Object.getOwnPropertyDescriptors(user));





// ==== PROPERTY-ACCESSOR ====

// const user = {
//     id: 101,
//     _email: '',
//     _pass: '',

//     get email() {
//         return this._email;
//     },

//     set email(value) {
//         this._email = value;
//     },

//     get info() {
//         return `id: ${this.id}, email: ${this._email}`;
//     }
// };

// user.email = 'petya@mail.com';
// console.log(user.email);
// console.log(user.info);

// console.log(Object.getOwnPropertyDescriptors(user));

// Object.defineProperty(user, 'password', {
//     configurable: true,
//     get: function() {
//         return this._pass;
//     },
//     set: function(val) {
//         this._pass = val;
//     }
// });

// console.log(Object.getOwnPropertyDescriptors(user));





// ===== PROTOTYPE =====

// const unit = {
//     hp: 100,
//     render() {
//         console.log(`render(): ${this.hp}`);
        
//     }
// };

// const archer = {
//     title: 'Vasia',
// };
// const warrior = {
//     title: 'Petya',
//     __proto__: unit,
// };

// // archer.[[Prototype]] = unit;        // ERROR
// archer.__proto__ = unit;


// // console.log(unit);
// // console.log(archer);
// // console.log(archer.title);
// // console.log(archer.hp);
// // archer.render();

// archer.hp = 200;

// console.log(unit);
// console.log(archer);
// console.log(warrior);



// --- with accesors and methods ---

// const unit = {
//     hp: 100,
//     _level: 0,
//     render() {
//         console.log(`render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log(`hp: ${this.hp} level: ${this.level}`);
//     },
//     get level() {
//         return this._level
//     },
//     set level(val) {
//         this._level = val;
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };


// archer.hp = 500;
// archer.level = 20;      // ~ archer.set level(20);

// console.log(unit);
// console.log(archer);

// // console.log(archer.level);

// unit.showInfo();
// archer.showInfo();



// --- for/in ---

// const unit = {
//     hp: 100,
//     _level: 0,
//     render() {
//         console.log(`render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log(`hp: ${this.hp} level: ${this.level}`);
//     },
//     get level() {
//         return this._level
//     },
//     set level(val) {
//         this._level = val;
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };

// console.dir(archer);

// for(let prop in archer)
//     console.log(prop);

// console.log(Object.getOwnPropertyDescriptors(archer.__proto__.__proto__));

// for(let prop in archer) {
//     if (archer.hasOwnProperty(prop))        // фильтр на собственные свойства(без прототипных)
//         console.log(prop);
// }
    

    

// ====== Использование функции-конструктора при наследовании ======

// const user = {
//     id: 101,
// };

// function Admin() {
//     this.role = 'admin';
// }

// console.dir(Admin);


// // console.dir(User);
// // console.log(new User());

// // Admin.prototype = user;      // :-(
// // console.dir(Admin);
// // console.dir(new Admin());


// const admin = new Admin();
// const admin2 = new admin.constructor();


// function User(email) {
//     this.email = email;
// }

// console.dir(User);

// User.prototype.render = function() {
//     console.log(`email: ${this.email}`);
// }

// const user = new User('vasia@mail.com');
// console.log(user);
// user.render();



// ====== Существующие прототипы =======


// const a = {};
// const b = new Object();

// console.dir(Object);
// console.log(a);
// console.log(b);
// console.log(String(a));


// const a = [1, 2, 3];
// const b = new Array();

// console.dir(Array);
// console.log(a);
// console.log(b);
// console.log(String(a));


// function f() {}
// const f1 = new Function();

// console.dir(Function);
// console.dir(f);


// console.dir(Map);


// const a = 4;
// console.dir(Number);
// console.dir(Boolean);
// console.dir(String);
// console.dir(Symbol);



// String.prototype.hohoho = function() {
//     console.log('hohoho');
// };
// 'vasia'.hohoho();



// --- пример полтфила
// if (!String.prototype.hohoho) {
//     String.prototype.hohoho = function() {
//     }
// }


// --- заимствование методов
// const container = {
//     0: 101,
//     1: 202,
//     2: 303,
//     length: 3,
// }

// container.__proto__ = Array.prototype;
// console.log(container);

// container.join = Array.prototype.join;
// console.log(container);
// console.log(container.join('-'));


// ---- создание "автономного" (чистого) объекта

// console.dir(Object);
// const a = Object.create(null)
// console.log(a);
// const b = Object.create(null, {
//     id: {
//         value: 101,
//         writable: true,
//     }
// });
// console.log(b);


// ----- Глубокое клонирование ------ :-)

// obj = {};
// const copy = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

























