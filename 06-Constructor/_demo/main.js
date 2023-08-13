const log = console.log;

log("Constructor Funtion");

const dev1 = {
    name : 'John',
    age : 32,
    role : 'Dev',
    salart : 40_000,
    dev : function() {
        console.log("I'm Develop some feature")
    },
};


// Object Creators == Constructor Function

function Developer(name,age) {
    this.name = name;
    this.age = age;
    this.role = 'dev';   
    this.salary = 40_000;
    this.dev = function () {
        console.log("I'm Develop some feature")
    };
}

const dev2 = new Developer('Supalap',26);
log(dev2);