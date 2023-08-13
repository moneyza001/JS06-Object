ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

```js
let user = {
  name: 'John',
  sayHi: function () {
    console.log(this.name);
  }
};

(user.sayHi)(); // * John เพราะ this นที่นี้คือ user เหมือนเราใช้คำสั่ง user.name เลยได้ value ค่า John !!