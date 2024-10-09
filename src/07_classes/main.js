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



class User {
    permissions = ['read'];

    constructor(email) {
        this.email = email;                         
        console.log(`User ctor: ${this.permissions}`);
        console.log(`User ctor: ${this.hp}`);
        console.log(`User ctor: ${this.getSlug()}`);
        this.render();
        console.log('----------');
    }

    getSlug() {
        return 'user';
    }

    render() {
        console.log(this.getSlug());
    }
}

class Admin extends User {
    permissions = ['read', 'write'];
    hp = 200;

    constructor(email) {
        super(email);
        console.log(`Admin ctor: ${this.permissions}`);
        console.log(`User ctor: ${this.hp}`);
        console.log(`User ctor: ${this.getSlug()}`);
    }

    getSlug() {
        return 'admin';
    }
}

console.dir(Admin);
const a = new Admin('vasia@mail.com');
console.log(a);

