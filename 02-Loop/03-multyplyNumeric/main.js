let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

let multiplyNumeric = (obj, num) => {
    for(let key in obj){
        if(typeof(obj[key])== 'number'){
          obj[key] = obj[key] * num;
        }
    }
    return obj ;
}

console.log(multiplyNumeric(menu,3))
console.log(multiplyNumeric(menu,3))
console.log(multiplyNumeric(menu,3))
console.log(multiplyNumeric(menu,3))