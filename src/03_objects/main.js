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








