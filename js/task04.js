// ===--- Task Description
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в !конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в !начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// ====---- Task 04 Start
console.log("TASK 04");

class StringBuilder {
 // const value = [];
  constructor (_value) {
    this.value = _value;
    console.log(this.value);
  }

  getstring() {
    return this.value;
  }

  get () {
    console.log(this.value);
  }

  append(str) {
    this.value = this.value + str;
  }

  prepend(str) {
    this.value = str + this.value;
  }

  pad(str) {
    this.value = str + this.value;
    this.value = this.value + str;
  }

}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
