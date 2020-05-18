// ===--- Task Description
//Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

// ====---- Task 07 Start
console.log("TASK 07");
// console.log("In progress.... 404");

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 10,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = "f" + Math.floor(Math.random() * 1e6).toString(16);
        if (type === Transaction.DEPOSIT) {
            console.log(`Balance deposited for ${amount} units`);
            this.getBalance();

        }
        if (type === Transaction.WITHDRAW) {
            console.log(`Balance withdrawned for ${amount} units`);
        }

    this.transactions.push([id, amount, type]);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(Transaction.DEPOSIT, amount);
},

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction(Transaction.WITHDRAW, amount);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`Current balance is: ${this.balance} units`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transElement of this.transactions) {
      //console.log(transElement[0]);
      if (transElement[0] === id) {
        return `The transaction ID:${id}, is: '${transElement[1]}' of ${transElement[2]} units`;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    console.log('======----- this.getTransactionTotal started');
    
    let total = 0;

    for (const transElem of this.transactions) {
        if (transElem[1] === type) {
            total += transElem[2];
        }
        }
        return `Total of the '${type}' transactions is: ${total}`;   
    }   
}

account.getBalance();
account.deposit(100);
account.deposit(100);
account.deposit(100);
account.getBalance();
account.withdraw(70);
account.withdraw(70);
account.getBalance();

console.log(account.transactions);
console.log('Looking for transaction:',account.transactions[1][0]);
console.log(account.getTransactionDetails(account.transactions[1][0]));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
