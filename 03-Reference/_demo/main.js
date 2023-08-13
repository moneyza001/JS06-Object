const log = console.log;
log('Learn Ref.')

// Copy By Value
// Copy By Refrence


// Copy By Value
// Primitive
let message = "Hello";
let word = message;
log(message)
log(word)

message = 'Hi'
log(message)
log(word)

// Ojaect
let user = {
    name: 'John',
};

// COPIED BY REFERANCE
let emplyoee = user;
log(user.name)


emplyoee.name = 'Joe';
log(user)
log(emplyoee)