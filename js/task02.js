// ===--- Task Description

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// ===--- Task Description END


// ====---- Task 02 Start
console.log("TASK 02");

const countProps = function (obj) {
  // твой код
  // const objLength = Object.keys(obj).length;
  return Object.keys(obj).length; // ?- return q-ty of keys array
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
