const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};
let obj = {};


console.log(employees.john.address.district)





// for(let key in employees) {
//     console.log(key,employees.key)
//     // for(let value in employees)
//     // console.log(employees[key][value])
// }