let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let  isEmptyObj = (obj) => {
    for(let key in obj)return false;
    return true;
}



let calSalary = (obj) => {
    if(isEmptyObj(obj)) return 0;
    let sum = 0;
    for(let key in obj){
        sum += obj[key]
    }
    return sum;
}