// ===--- Task Description

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта (значение свойства name). Возвращает общую стоимость продукта (цена * количество).

//Вызовы функции для проверки работоспособности твоей реализации.

// ====---- Task 06 Start
console.log("TASK 06");

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;

  for (const insObj of allProdcuts) {
    // console.log(Object.keys(insObj)[0]);
    let name = Object.keys(insObj)[0];
    //console.log(insObj.name);
    //console.log(productName);

    if (insObj.name === productName) {
      totalPrice = insObj.price * insObj.quantity;
    }
  }
  if (totalPrice === 0) {
    return "Item not found or incorrect input";
  }
  return totalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

console.log(calculateTotalPrice(products, "Дроед")); //
