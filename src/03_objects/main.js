'use strict';

// let a = {};
// let b = new Object();



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };
//
// console.log(user.id);
// user.email = 'petya@mail.com';
// console.log(user);
//
// // user = {};          // ERROR
//
// user.role = 'admin';
// console.log(user);
//
// user['main permission'] = 'write';
// console.log(user);






// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };
//
// const key = 'email';
// console.log(user[key]);





// let key = 'age';
//
// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     [key]: 34,
// };
//
// console.log(user);





// function f(id, email, key, val) {
//     return {
//         id,
//         email,
//         [key]: val,
//         1: 'test val',
//     };
// }
//
// const obj = f(101, 'vasia@mail.com', 'age', 34);
// console.log(obj);






// function f(user) {
//     console.log('email' in user);
// }
//
// f({
//     id: 101,
//     email: undefined
// })





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };
//
// for(let key in user) {
//     console.log(`key: ${key}, value: ${user[key]}`);
// }





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     '+23': 'one',
//     '+12': 'two',
//     34.5: 'three',
// };
//
// for(let key in user) {
//     console.log(`key: ${key}, value: ${user[key]}`);
// }





// let a = {
//     id: 101,
// };
//
// let b = a;
//
// b.id = 200;
//
// console.log(a, b);
//
// console.log(a == b);
// console.log(a === b);






// const a = {
//     // id: 101,
// };
// const b = {
//     // id: 101,
// };
// console.log(a == b);
// console.log(a === b);
//
// // console.log(a > b);
// // console.log(a == 4);





// ======= Клонирование объектов

// const user = {
//     id: 12,
//     email: 'vasia@mail.com',
// }
// const copy = {};
// for (let k in user)
//     copy[k] = user[k];
//
// console.log(user, copy);
// console.log(user === copy);


// const copy = Object.assign(user, {role: 'admin'});
// console.log(user);
// console.log(copy);

// const copy = Object.assign({}, user);
// console.log(copy);
// console.log(user === copy);

// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = {a: 10, d: 23};
// const obj3 = {a: 100, c: 30};
//
// console.log(Object.assign({}, obj1, obj2, obj3));



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     pemissions: {
//         'read': true,
//         'write': true,
//         'delete': false,
//     }
// };
//
// // const user2 = Object.assign({}, user); // поверхностное клонирование
// // const user2 = structuredClone(user);
// // const user2 = _.cloneDeep(user);
//
// user.email = 'petya@mail.com';
// user.pemissions.delete = true;
// console.log(user2);





// ==== methods / this

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// user.render = function() {
//     console.log('test string');
// };
//
// console.log(user);
// user.render();


// function declRender() {
//     console.log('test');
// }
// user.render = declRender;
// user.render();


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render: function() {
//         console.log('test');
//     },
//     show() {
//         console.log('show');
//     },
//     func: () => {}
//
// };



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render() {
//         console.log(this.email);
//         // console.log(email);      ERROR
//     }
//
//     // :-(((
//     // render() {
//     //     console.log(user.email);
//     // }
// };
// user.render();
//
// function show() {
//     console.log(this);
// }
// show();
//
// user.show = show;
// user.show();





// function render() {
//     console.log(this.email);
// }
//
// const a = {email: 'vasia@mail.com'};
// const b = {email: 'petya@mail.com'};
//
// a.render = render;
// b.render = render;
//
// a.render();
// b.render();





// const user = {
//     id: 101,
//     render() {
//         const handler = () => console.log(this.id);
//         handler();
//         const compare = () => console.log(this === user);
//         compare();
//     }
// };
//
// user.render();






// function creator() {
//     return {
//         id: 101,
//         reference: this,
//     };
// }

// function creator() {
//     return {
//         id: 101,
//         reference() {
//             return this;
//         }
//     };
// }
//
// const user = creator();
// console.log(user);
// console.log(user.reference().id);





// let user = {
//     init(val) {
//         this.val = val;
//     }
// };
//
// console.log(user);
// user.init(100);
// console.log(user);




// const counter = {
//     count: 0,
//     add() {
//         this.count++;
//         return this;
//     },
//     render() {
//         console.log(`count = ${this.count}`);
//     }
// };
//
// counter.add().add().add();
// counter.render();




// ===== new

// function User(id, email) {
//     // this = {};
//
//     this.id = id;
//     this.email = email;
//
//     // return this;
// }
// (((
// User(101, 'petya@mail.com');

// (((
// const obj = {
//     func: User,
// };
// obj.func(101, 'vasia');
// console.log(obj);

// )))
// const user = new User(101, 'vasia@mail.com');
// console.log(user);





// function f() {
//     console.log(new.target);
// }
//
// f();
// new f();



// function User(email) {
//     if (! new.target)
//         return new User(email);
//
//     this.email = email;
// }
//
// console.log(new User('vasia'));
// console.log(User('vasia'));





// function User(email) {
//
//     this.email = email;
//
//     // return {test: true};
//     // return;
//     return 23;
// }
//
// console.log(new User('vasia'));




// function User() {
//     this.id = 101;
// }
//
// console.log(new User());




// function User(email) {
//     this.id = 101;
//     this.email = email;
//
//     this.render = function() {
//         console.log(`id: ${this.id}, email: ${this.email}`);
//     }
// }
//
// const u = new User('vasia@mail.com');
// u.render();






// const obj = {};
// function A() {
//     return obj;
// }
// function B() {
//     return obj;
// }
//
// const a = new A();
// const b = new B();
// console.log(a === b);




// function Counter(init) {
//     this.count = init;
//     this.add = function() {
//         this.count++;
//         return this;
//     }
//     this.render = function() {
//         console.log(`count = ${this.count}`);
//     }
// }
//
// const a = new Counter(10);
// const b = new Counter(100);
//
// a.add()
//     .add()
//     .add()
//     .render();





// const user = {};

// const email = user.email ?? 'no_email';
// console.log(email);

// console.log(user?.email);

// console.log(user?.role?.title);

// const user = {
//     email: 'vasia@mail.com',
//     render() {
//         console.log('render');
//     }
// };
//
// const key = 'email';
//
// user.render?.();
// user.show?.();
// console.log(user?.[key]);










