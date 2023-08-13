const log = console.log;

const todo = {
    task : 'Do Hw',
    complete : false,
    due_date : '13_08_2023'
}


// // Clone
// const newTodo = {}
// // 1. เอาต้นแบบมา loop แล้ว asign ทีละ kry:value ให้ object ใหม่

// for (let key in todo) {
//     newTodo[key] = todo[key];
// }

// log(newTodo)


// 2. Object.assign

// const newTodo = {}

// Object.assign(newTodo,todo)


const newTodo = Object.assign({},todo)