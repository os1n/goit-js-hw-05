// ===--- Task Description

// Напиши класс Car с указанными свойствами и методами.

// ====---- Task 05 Start
console.log("TASK 05");

class Car {
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */

  constructor(objIn) {
    this.speed = 0; // setting the initial value of 0
    this.distance = 0; // setting the initial value of 0
    this.isOn = false; // setting the initial value of 0

    // this.speed = objIn.speed;
    this.price = objIn.price;
    this.maxSpeed = objIn.maxSpeed;
    //this.isOn = objIn.isOn;
    //this.distance = objIn.distance;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance} and price: ${car.price}`
    );
  }

  get() {
    return this.price;
  }

  setPrice(_price) {
    this.price = _price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else
      console.log(
        `Maximum speed can not be exceeded, plese enter less accelerate rate!`
      );
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= -value;
    } else
      console.log(
        `Minimum car speed can not be less than 0, plese enter correct decelerate rate!`
      );
  }

  drive(hours) {
    if (this.isOn) this.distance += hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

//console.log(mustang);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
