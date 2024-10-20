'use strict'

// === error
// function load(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// load('script1.js');

// render('vasia');


// === with callback
// function load(src, onloadCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onloadCallback();
//     document.head.append(script);
// }

// load('script1.js', () => {
//     render('vasia');
// });


// === with callback
// function load(src, onloadCallback, onErrorCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onloadCallback();
//     script.onerror = () => onErrorCallback();
//     document.head.append(script);
// }

// load('script1.js', () => {
//     load('script22.js', () => {
//         render('message');
//         log('vasia');
//     }, () => console.log('error2'));
// }, () => console.log('error1'));




// === Promise ===

// console.dir(Promise);

// const promise = new Promise((resolve, reject) => {
//     //
//     //
//     // resolve(value);
//     //  or
//     // reject(error);

// });

// // state:       pending,        fulfilled,      rejected
// // result:      undefined       value           error



// const promise = new Promise((resolve, reject) => {
//     reject(new Error('error'));
//     setTimeout(() => resolve(101), 2000);
// });

// console.log(promise);




// new Promise((res, rej) => {
//     // setTimeout(() =>res(101), 1000);
//     setTimeout(() =>rej(new Error('error')), 1000);
// })
//     .then(res => {
//         console.log(`result: ${res}`);
//     }, err => {
//         console.log(`error: ${err}`);
//     })
//     .catch(err => {})
//     .finally(() => {})




// === withoout Promise
// function load(src, onloadCallback, onErrorCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onloadCallback();
//     script.onerror = () => onErrorCallback();
//     document.head.append(script);
// }

// === With Promise
function load(src) {
    return new Promise((res, rej) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => res(script);
        script.onerror = () => rej(new Error('Script loading failed...'));
        document.head.append(script);
    });
}

load('script1.js')
    .then(
        // script => {return  150;},
        script => {
            return new Promise((res, rej) => res(150));
        },
        error => {}
    )
    .then(
        val => {console.log(val)},
        error => {}
    )






