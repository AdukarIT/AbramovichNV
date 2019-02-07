// 1 задача

const getRandomArray20 = (len = 20) => new Array(len).fill(1).map(a => Math.round(Math.random() * 49 + 1));

// 2 задача

const getRandomArray = (len, min, max) => new Array(len).fill(1).map(a => Math.round(Math.random() * (max - min) + min));

// 3 задача

const verifyUrl = str => (str.startsWith('https://') && str.endsWith('.html'));

// 4, 5 задача

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

// 6 задача

const dateInOwnFormat = () => {
    const date = new Date();
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    console.log(date.getDay() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear());
}

// 7 задача

const spendingSecond = () => {
    let date = new Date();
    console.log(date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
}

// Последняя

function ifStringHave(str) {
    try {
        if (!str.includes('ф')) throw new Error('Ошибка. Не содержит');
        console.log('Всё хорошо')
    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('Хорошая попытка')
    }
}
