// ===--- Task Description
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. Функция считает общую сумму запрплаты работников и возращает ее. Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

// ====---- Task 04 Start
console.log("TASK 04");

const countTotalSalary = function (employees) {
  // твой код
  let sum = 0;
  let sallaryArr = Object.values(employees); // new array of the sallaries
  for (let salary of sallaryArr) {
    sum += salary; // increment sum
  }
  return sum; //return sum
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
