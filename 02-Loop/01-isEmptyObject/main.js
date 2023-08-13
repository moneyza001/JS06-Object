

// Object => Boolean
let  isEmptyObj = (obj) => {
    for(let key in obj)return false;
    return true;
}