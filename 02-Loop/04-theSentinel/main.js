const TERMINATE = 'stop' 
const object = {}


do {
    key = prompt('Enter object key')
    value = prompt('Enter object value')

    if (key != TERMINATE && value != TERMINATE) {
        object[key] = value;
    }    
} while(key != TERMINATE && value != TERMINATE);

console.log(object)