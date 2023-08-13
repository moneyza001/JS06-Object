บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
const user = {
  email: 'cc@gmail.com',
  isActive: true
};

user.isActive = false;
console.log(user); // * แสดงเป็น Object
user = {};
console.log(user); // ** error เพราะไม่สามารถเปลี่ยนแปลงค่าในตัวแปล const ได้

```
