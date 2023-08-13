const log = console.log;


// ###########################################÷

// Object
// each record => property
// each property => <key><value>

// some record => <key><FN>
// called method == ความสามารถของ Object


// const programer = {
//     name : 'Supalap',
//     age : 26,
//     dev : devWebsite,
//     meet : metting,
//     debug : deBug,
// }
// function metting(){
//     log("I'm meeting")
// }

// function devWebsite () {
//     log("I'm working")
// }

// function deBug() {
//     log("I'm debugging")
// }
//property
// log(programer.name)
// log(programer.age)

// medthod == ความสามารถของ Object
// Syntax : <obj><method>()
// programer.dev();
// programer.meet();
// programer.debug();


// ###########################################÷
// Althernative Syntax
// ###########################################÷

// const programer = {
//     name: 'John',
//     age : 30,
//     dev: function () {
//         log("I'm wroking")
//     },
//     meet : () => log("I'm meeting"),
// //  Method Shorthand
//     sleep() {
//         log("I'm Sleeping")
//     },
// }

// programer.dev();
// programer.meet();
// programer.sleep();

// // ###########################################÷
// // ###########Basic OOP : 
// // ###########################################÷

// //Mini-Lab
// // สร้าง Object ของตัวเอง
// // ระบุความสามารถตัวเอง 4 อย่าง (Cover all syntax)
// function skill(task){
//     log(`${task} SKILL`)
// }

// const money = {
//     name : 'money',
//     age : 26,
//     gender : 'male',
//     skill : skill ,
//     sport : function (type) {
//         log(`${type} SKILL`)
//     },
//     whatch : (some) => {
//         log(`Whatch ${some} ALL DAY`)
//     },
//     eat(menu) {
//         log(`EAT ALL ${menu}`)
//     }
// }

// money.skill('HTML')
// money.sport('FOOTBALL')
// money.whatch("YOUTUBE")
// money.eat('ZABB')

// const car = {
//     brand : "tesla",
//     model : "X",
//     speed : 80,
//     drive() {log('Driveing')},
//     autoPilot : () => log('Self Driving')
// ,}
// log(car.brand)
// log(car.model)

// const calculator = {
//     sum : (x,y) => x + y ,
//     minus : (x,y) => x - y ,
// }

// log(calculator.sum(5,4));
// log(calculator.minus(5,4));

// log(car.speed);
// car.speed = calculator.sum(car.speed, 30);
// log(car.speed)

// // ###########################################÷
// // ############4. "This" Keyword  
// // ###########################################÷

// JS Keyword : if, elas, for, while, do, switch, this,
// Question : ทำอย่างไร method จพเข้าถึง property ของตัวเองได้ ??
// const user = {
//     name: 'Codecamp',
//     age : 15,
//     sayHi: function () {
//         log(`Hello ${this.name}`)
//     },
//     growOld : function () {
//         this.age+=1;
//     },
// }


// log(user.age);
// user.growOld();
// user.growOld();
// log(user.age);

// function dev() {
//     console.log(`This feature developed by ${this.name}`)
// }

// const programer1 = {
//     name: 'John',
//     develop: dev,
// };

// const programer2 = {
//     name : 'Jane',
//     develop : dev,
// };
// programer1.develop()
// programer2.develop()

// // ###########################################÷
// // ############ 5. Execution Context == Caller
// // ###########################################÷

//Global(Browser) : window object
// this.alert('Im Global')
// alert("I'm Global")


// FN declaration ทำให้ sayHi() ไปติดใน window object
// Hoistiong
function sayHi() {
    console.log(this);
}
var a = 'm'

sayHi()


var name = "Codecamp";
function sayHello() {
    console.log(this.name)
}


const user = {
    name : 'John',
    say : sayHello,
    screem: () => {
        console.log(`screem by ${this.name}`)
    },
    scrm : function() {
        console.log(`screem by ${this.name}`)
    }
};
user.say()
user.screem(); // อย่าใช้ this กับ arrow FN  
user.scrm(); 
// let use ; 