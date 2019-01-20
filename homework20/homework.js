// Task 1

var numberAppart = +prompt("Введите номер квартиры");

switch (true) {
    case (numberAppart < 1): 
    console.log("Неверное значение номера квартиры");
    break;
    case (numberAppart <= 20):
    console.log("1 подъезд");
    break;
    case (numberAppart <= 40):
    console.log("2 подъезд");
    break;
    case (numberAppart <= 60):
    console.log("3 подъезд");
    break;
    case (numberAppart <= 80):
    console.log("4 подъезд");
    break;
    case (numberAppart <= 100):
    console.log("5 подъезд");
    break;
    default:
    console.log("Такой квартиры в доме нет");
}

// Task 2

var autoBrand = prompt("Введите марку автомобиля");

switch (true) {
    case (autoBrand.toLowerCase() === "bmw"): 
    console.log("BMW – страна происхождения Германия");
    break;
    case (autoBrand.toLowerCase() === "ford"): 
    console.log("Ford – страна происхождения США");
    break;
    case (autoBrand.toLowerCase() === "peugeot"): 
    console.log("Peugeot – страна происхождения Франция");
    break;
    case (autoBrand.toLowerCase() === "volkswagen"): 
    console.log("Volkswagen – страна происхождения Германия");
    break;
    case (autoBrand.toLowerCase() === "renault"): 
    console.log("Renault – страна происхождения Франция");
    break;
    case (autoBrand.toLowerCase() === "автоваз"): 
    console.log("АвтоВАЗ – страна происхождения Россия");
    break;
    case (autoBrand.toLowerCase() === "volvo"): 
    console.log("Volvo – страна происхождения Швеция");
    break;
    case (autoBrand.toLowerCase() === "geely"): 
    console.log("Geely – страна происхождения Китай");
    break;
    default:
    console.log(autoBrand + ' – страна происхождения неизвестна');
}

// Task 3

var year = +prompt("Введите год");

if (year % 400 === 0) {
    console.log(`${year} - високосный год`)
} else if (year % 100 === 0) {
    console.log(`${year} - невисокосный год`)
} else if (year % 4 === 0) {
    console.log(`${year} - високосный год`)
} else console.log(`${year} - невисокосный год`);

// Task 4

var numberToMultiply = +prompt("Введите число от 1 до 20");

if (numberToMultiply < 1 || numberToMultiply > 20) {
    console.log("Неверное значение");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numberToMultiply} x ${i} = ${numberToMultiply * i}`);
    }
}

// Task 5

var sumOdd = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) 
        continue;
    sumOdd += i;
}

console.log(sumOdd);

// Task 6

var firstFibonacci = 1;
var secondFibonacci = 1;
var sumFibonacci = 2;
var nextFibonacci;

for (let i = 1; i <= 15 - 2; i++) {
  nextFibonacci = firstFibonacci + secondFibonacci;
  firstFibonacci = secondFibonacci;
  secondFibonacci = nextFibonacci;
  sumFibonacci += nextFibonacci;
}

console.log(sumFibonacci);

// Task 7

var numberOfColumn = 8;
var numberOfRow = 8;
var defaultString = '#';

for (let i = 0; i < numberOfColumn / 2 - 1; i++) {
  defaultString += ' #';
}

for (let i = 0; i < numberOfRow; i++) {
  (i % 2 === 0) ? console.log(' ' + defaultString) : console.log(defaultString) ;
}