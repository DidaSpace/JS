// Управление животными в зоопарке
// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

// Ваша задача: реализовать класс ZooAnimal с указанными характеристиками. Убедитесь, что вы используете приватные поля и статическое поле в соответствии с описанием.

// class ZooAnimal {
//   #name;
//   #age;
//   #gender;
//   static MAX_AGE = 10;
//   constructor(name, age, gender) {
//     this.#name = name;
//     this.#age = age;
//     this.#gender = gender;
//     if (age > ZooAnimal.MAX_AGE) {
//       throw new Error("Превысили возраст");
//     }
//   }
//   changeName(newName) {
//     this.#name = newName;
//   }
//   changeAge(newAge) {
//     if (newAge > ZooAnimal.MAX_AGE) {
//       throw new Error("Превысили возраст");
//     }
//     this.#age = newAge;
//   }
//   getInfo() {
//     console.log(
//       `Name -${this.#name}, age - ${this.#age}, gender - ${this.#gender}`
//     );
//   }
// }

// const newAnimal = new ZooAnimal("Elephant", 5, "male");
// newAnimal.getInfo();
// newAnimal.changeName("Zuri");
// newAnimal.getInfo();
// newAnimal.changeAge(6);
// newAnimal.getInfo();
// newAnimal.changeAge(12);
// newAnimal.getInfo();

// // Задание 1: ""Управление персоналом компании""--------------------------------------------------------------------------------------------------

// // Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// // Свойство name (имя) - строка, имя сотрудника.
// // Метод displayInfo() - выводит информацию о сотруднике (имя).
// // Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// // Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// // Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // // Пример использования классов
// // const employee = new Employee(""John Smith"");
// // employee.displayInfo();
// // // Вывод:
// // // Name: John Smith

// // const manager = new Manager(""Jane Doe"", ""Sales"");
// // manager.displayInfo();
// // // Вывод:
// // // Name: Jane Doe
// // // Department: Sales

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
//   displayInfo() {
//     console.log(`Имя сотрудника: ${this.name}`);
//   }
// }

// class Manager extends Employee {
//   constructor(name, department) {
//     super(name);
//     this.department = department;
//   }

//   displayInfo() {
//     console.log(`Имя сотрудника: ${this.name}, отдел: ${this.department}`);
//   }
// }

// const employee1 = new Employee("Sara Smith");
// employee1.displayInfo();

// const manager1 = new Manager("Elena", "продожа");
// manager1.displayInfo();

// ""Управление списком заказов""-------------------------------------------------------------------------------------------------------------------

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
class Product {
  constructor(product, price) {
    this.product = product;
    this.price = price;
  }
}

class Order {
  constructor(num, products = []) {
    this.num = num;
    this.products = products;
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

const product1 = new Product("phone", 500);
const product2 = new Product("laptop", 2000);

const order1 = new Order(1);
order1.addProduct(product1);
order1.addProduct(product2);
console.log(`Oбщая стоимость заказа :`, order1.getTotalPrice());
