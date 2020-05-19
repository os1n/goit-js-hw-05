// ===--- Task Description

// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// ====---- HW Task 01 Start
console.log("TASK 01 start");

const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

Account.prototype.getInfo = function () {
  console.log(this);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");

//console.log(mango);

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");

//console.log(poly);

poly.getInfo(); // Login: Poly, Email: poly@mail.com
