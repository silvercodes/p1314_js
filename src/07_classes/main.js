'use strict'

// ====== INTRO =====
// class User {
//     id = 101;
//     get email() {
//         return this._email;
//     }
//     set email(val) {
//         this._email = val;
//     }
//     constructor(email) {
//         this.email = email;
//     }
//     func_1() {}
//     func_2() {}
// }

// // User();         // ERROR

// console.dir(User);

// const a = new User('vasia@mail.com');
// console.log(a);

// -- Отличия от классической функции
// // 1. Нельзя вызвать без new
// // 2. Методы класса - неперечислимые
// console.log(Object.getOwnPropertyDescriptors(User.prototype));
// // 3. Внутри класса работает 'use strict'


// const UserClass = class {
//     render() {
//         console.log('render');
//     }
// };

// new UserClass().render();




// ======== INHERITANCE =========
// class User {
//     id = 101;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this._email;
//     }
//     set email(val) {
//         this._email = val;
//     }
    
//     func_1() {}
//     func_2() {}
// }

// class Admin extends User {
//     render() {
//         console.log(this.email);
//     }

// }


// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     connect() {
//         console.log(`User connected: ${this.email}`);
//     }
// }

// class Admin extends User {

//     // дефолтный конструктор
//     // constructor(...args) {
//     //     super(...args);
//     // }

//     constructor(email, permissions) {
//         super(email);
//         this.permissions = permissions;
//     }

//     checkRules() {
//         console.log(`Rules was checked for Admin ${this.email}`);
        
//     }

//     connect() {
//         super.connect();
//         this.checkRules();
//     }
// }

// const a = new Admin();
// a.connect();



// class User {
//     permissions = ['read'];

//     constructor(email) {
//         this.email = email;                         
//         console.log(`User ctor: ${this.permissions}`);
//         console.log(`User ctor: ${this.hp}`);
//         console.log(`User ctor: ${this.getSlug()}`);
//         this.render();
//         console.log('----------');
//     }

//     getSlug() {
//         return 'user';
//     }

//     render() {
//         console.log(this.getSlug());
//     }
// }

// class Admin extends User {
//     permissions = ['read', 'write'];
//     hp = 200;

//     constructor(email) {
//         super(email);
//         console.log(`Admin ctor: ${this.permissions}`);
//         console.log(`User ctor: ${this.hp}`);
//         console.log(`User ctor: ${this.getSlug()}`);
//     }

//     getSlug() {
//         return 'admin';
//     }
// }

// console.dir(Admin);
// const a = new Admin('vasia@mail.com');
// console.log(a);




// const user = {
//     render()  {
//         console.log('Method render()');
        
//     },
//     auth: function() {
//         console.log('Property auth()');
//     },
//     log: () => {console.log('Arrow func log()');},
// };

// const admin =  {

//     test() {
//         super.render();
//         super.auth();
//     },
//     auth: function() {
//         //  super.auth();
//     },
//     __proto__: user,
// };

// // admin.render();
// // admin.auth();

// admin.test();



// class Archer {
//     handler = function() {...}
//     render() {
        
//     }
// }





// ----- static ------

// class User {
//     static _maxId = 0;
//     _permissions = ['read'];

//     id = 0;

//     get permissions() {
//         return this._permissions;
//     }
//     set permissions(value) {
//         this._permissions = value;
//     }
//     static get maxId() {
//         return this._maxId;
//     }
//     constructor(email) {
//         this.id = ++(User._maxId);
//         this.email = email;
//     }
//     static selfCompare(a, b) {
//         return a.id - b.id;
//     }
//     render() {
//         console.log(`id: ${this.id}, email: ${this.email}`);
        
//     }
// }

// console.dir(User);
// const a = new User('vasia@mail.com');
// console.log(a);

// console.log(Object.getPrototypeOf(a).constructor.maxId);





// class User {
//     static _maxId = 0;
//     _permissions = ['read'];

//     id = 0;

//     get permissions() {
//         return this._permissions;
//     }
//     set permissions(value) {
//         this._permissions = value;
//     }
//     static get maxId() {
//         return this._maxId;
//     }
//     constructor(email) {
//         this.id = ++(User._maxId);
//         this.email = email;
//     }
//     static selfCompare(a, b) {
//         return a.id - b.id;
//     }
//     render() {
//         console.log(`id: ${this.id}, email: ${this.email}`);
        
//     }
// }

// class Admin extends User  {
//     constructor(email) {
//         super(email);
//     }
// }

// console.dir(Admin);
// const a = new Admin('vasia@mail.com');
// console.log(a);




// =========== public / protected / readonly / private ============

// class User  {
//     // public
//     id = 101;

//     // protected
//     _email = '';
//     get email() {return this._email;}
//     set email(value) {this._email = value;}

//     // readonly
//     _password = '';
//     get password() {return this._password;}

//     // private
//     #avatarFile = '';
//     #setAvatarFile(path) {
//         this.#avatarFile = path;
//     }
//     get avatarFile() {
//         return this.#avatarFile;
//     }
//     constructor(path) {
//         this.#setAvatarFile(path);
//     }
// }

// console.dir(User);
// const a = new User('/path/avatar.png');
// // a.#setAvatarFile('');



// class User {
//     #id = 0;
//     #email = '';
//     #pass = '';

//     constructor(id) {
//         this.#id = id;
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = this.#prepareEmail(value);
//     }
//     set #password(value) {
//         this.#pass = 'hashhashhash';
//     }

//     #prepareEmail(email) {
//         return email.toLowerCase(email);
//     }
//     set password(value) {
//         this.#password = value;
//     }
// }

// const a = new User(101);
// a.email = 'VASIA@mail.com';
// a.password = '123123123';
// console.log(a);







// =========== extends from embedded classes ========

// const a = [1, 2, 3];
// console.log(a);
// console.dir(Array);


// class Container extends Array {
//     constructor(...args) {
//         super(...args);
//     }
//     getCount() {
//         return this.length;
//     }
// }

// const a = new Container(1, 2, 3, 4, 5);
// console.log(a);
// console.log(a.getCount());



// =========== instanceof ===========
// class User {

// }
// class Admin extends User {

// }

// const a = new Admin();
// console.log(a instanceof User);

// Object.getPrototypeOf(a) === User.prototype;                        // false
// Object.getPrototypeOf(Object.getPrototypeOf(a)) === User.prototype; // true
// // ...



// =========== mixins ============

const renderMixin = {
    render() {
        console.log(`id: ${this.id}`);
    }
};

class User {
    constructor(id) {
        this.id = id;
    }
}

Object.assign(User.prototype, renderMixin);

const a = new User(101);
a.render();






