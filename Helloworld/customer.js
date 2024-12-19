"use strict";
// //Class in TypeScript
// class Customer {
//     firstName: string;
//     lastName: string;
// }
// // Constructor an instance
// let myCustomer = new Customer();
// myCustomer.firstName = "Filmon";  
// myCustomer.lastName = "Ghirmatzion";
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
// // class constractor
// class Customer {
//     firstName: string;
//     lastName: string;
//     constructor(theFirst: string, theLast: string) {
//         this.firstName = theFirst;
//         this.lastName = theLast;
//     }
// }
// let myCustomer = new Customer("Filmon", "Ghirmatzion");
// console.log(myCustomer.firstName);
// console.log(myCustomer.lastName);
// using getter and setters 
class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
}
let myCustomer = new Customer("Filmon", "Ghirmatzion");
myCustomer.setFirstName("Filmon");
myCustomer.setLastName("Ghirmatzion");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
