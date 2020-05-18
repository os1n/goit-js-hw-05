// ===--- Task Description

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// ===--- Task Description


// ====---- Task 03 Start
console.log("TASK 03");

const findBestEmployee = function (employees) {
  // твой код

  let bestEmployee = Object.keys(employees)[0]; // let bestEmployee = the first one (any)

  for (const key in employees) {
    //console.log(key, employees[key]);

    //compare the rate of the Best empl and the next:
    if (employees[key] > employees[bestEmployee]) {
      bestEmployee = key;
    } // let the Best shall be the current
  }
  return bestEmployee; // return the best one
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  "Best employee: ",
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  "Best employee: ",
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  "Best employee: ",
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
