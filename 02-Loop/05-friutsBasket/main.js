const TERMINATE = 'stop' 
const fruit = {}

let key;
let value;

do {
    key = prompt('Enter Fruit')
    value = prompt('Enter Quantity')

    if (+value == 1 ) {
        fruit[key] = value;
    }else if (+value > 1){
        fruit[`${key}s`] = value;
    }
} while(key != TERMINATE && value != TERMINATE);

// if (value == 1 ) {
//     fruit[key] = value;
// }else if (value > 1){
//     fruit[`$[key]s`] = value;
// }

console.log(fruit)