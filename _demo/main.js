// console.log('Learn Object')

// // DATA type
// //  Priitive
// //  Non-Primitive : Object

// //##############################
// //#### Object declaration ######
// //##############################
// // {} == stand for Object / Scope
// // { reocrd_1, record_2, record_3, ...}
// // each record => <key_name>:<value>
// // <value> is Any  Datatype
// // <key_Name> Datatype : string
// // record === property (คุณสมบัติ,สิ่งที่มี) == key-value pair

// let user = {
//     firstName : 'Supalap',
//     lastName : 'Somsak', 
//     age : 26,
//     isAdmin : true,
//     'like human' : true,
// };

// //###################################
// //##### ACCESS, MODIFY, DELETE ######
// //###################################

// // Every Action Need <KEY_NAME> !!
// // DOT(.) Notation <Obj>.<key_name> === <Value> !!
// // ถ้าไม่มี record => return undefined
// //ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้ !! 

// // GET,POLL,READ
// // console.log(user)
// console.log(user.firstName)
// console.log(user.lastName)
// console.log(user.age)
// console.log(user.isAdmin)
// console.log(user.saraly)
// console.log(user["like human"])

// // MODIFY,UPDATE
// // SYNTAX : <obj>.<key_value> = newValue
// user.firstName = 'SUPALAP';
// user.age = 25;
// user.age++;
// console.log(user.age)

// // ADD
// // SYNTAX : <obj>.<key_value> = newKey with Value
// user.address = 'Bangkok';
// // console.log(user)

// // DELETE
// // SYNTAX :delete <obj>.<key_value> 

// delete user.isAdmin;
// console.log(user)

// //###################################
// //#####    NESTER Object       ######
// //###################################

// const employee = {
//     fullName : 'Supalap Somsak',
//     saraly : 36000,
//     address : {
//         district : 'Phaya Thai',
//         province: 'Bangkok',
//         country: 'Thailand',
//     }
// }

// console.log(employee.saraly)
// console.log(employee.address)
// console.log(employee.address?.country)
// console.log(employee.address.province)
// console.log(employee.address?.village)

// //DOT ใช้กับ Obj เท่านั้น
// // ห้ามมมมมมมมมมมมมมมมมมมมมมม !! ใช้กับ undefined
// // วิธีแก้ optionnal chaining => <undefined>?.<key>


// console.log(employee.addr)
// // console.log(employee.addr.province) // undefined.province
// console.log(employee.addr?.province)



// //###################################
// //#####    Check KEY ???       ######
// //###################################

// const product = {
//     id:227,
//     name : 'IPHONE',
//     preice : 50000,
//     discount : 0.05,
//     'is mobile' : true,
// };


// //IN Operator
// // Syntax : <key_name_string> in <Obj>
// // comsole.log(product.discount); // Undefined
// console.log('name' in product) // true, false;
// console.log('discount' in product) // true, false;

// // method hasOwnProperty
// // Syntax : <Obj>hasOwnProperty <key_name_string> => BOOL
// console.log(product.hasOwnProperty('name'))


// //###################################
// //##### Bracket Notation [] !! ######
// //###################################

// // Syntax : <obj> ['<key_name_string>' ]
// // *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น 'string'
// // ***** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปลที่เป็น string 
// // Ascess key ผ่านตัวแปร ได้
// console.log(product.id);
// console.log(product['id']);

// console.log(product['is mobile']);

// product['name'] = 'Iphone-15';

// let aaaa = 'name'

// console.log(product[aaaa])
// console.log(product.aaaa)

// // PROPERTY ShortHand

// let username = prompt('Username')
// let age = prompt('Age')
// let email = prompt('Email')
// let USER = {username,age,email}

//###################################//###################################/
//###################################//###################################/
//#################    LOOP   ############################################/
//##################################//###################################//
//###################################//###################################/
// const user = {
//     firstName: 'Codecamp',
//     lastName : 'Software Park',
//     age : 15,
// };

// // For IN : Loop throung Object
// // SYNTAX : for (let <key_variable> in <obj>)
// for (let key in user) {
//     console.log(key)
//     console.log(user[key])

// }

// BuiltIn
/*
    console
    Math
    Date
    Formdata
*/
console.log('TEST')

Math.max(5,4,2,20); //20
const now = new Date();

const formData = new FormData()
formData.append('key','value')