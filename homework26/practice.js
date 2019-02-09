// 1 задача

const counterFactory = (start, step) => () => start += step;

const tictoc = counterFactory(2, 5);

// 2 задача

const take = (func, x) => {
    let result = [];
    for (let i = 0; i < x; i++) {
        result.push(func())
    }
    return result;
}

// 3 задача

const str = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.';

const strToArr = str => str.split(' ').map(a => (a[a.length - 1] == '.' || a[a.length - 1] == ',') ? a.slice(0, -1) : a);

const reverseString = str => str.split('').reverse().join('');

const reverseAndSort = arr => arr.map(a => reverseString(a)).sort((a, b) => a.length - b.length);

function howManySubstr(substr) {
    let result = 0;
    let i = -1;
    do {
        i = this.toLowerCase().indexOf(substr.toLowerCase(), i + 1);
        if (i != -1) result++;
    } while (i != -1)
    return result;
}

String.prototype.howManySubstr = howManySubstr;

const amountOfTheSymbol = (arr, symb = 'с') => arr.reduce((acc, current) => acc += current.howManySubstr(symb), 0);

// 4 задача

let obj = { greeting: "Привет" };
function func(surname, name) {
    alert(this.greeting + ', ' + surname + ' ' + name);
}
func.call(obj, 'Иван', 'Иванов');

// 5 задача

func.apply(obj, ['Иван', 'Иванов']);
