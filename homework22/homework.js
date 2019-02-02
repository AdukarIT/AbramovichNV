// 1 задача

const triangle = (leg1, leg2, hypotenuse) => {
    return (leg1 > 0 && leg2 > 0 && hypotenuse > 0) && hypotenuse ** 2 == leg1 ** 2 + leg2 ** 2;
}

// 2 задача

const repeat = (str = '', n = 2) => {
    var result = '';
    for (let i = 0; i < n; i++) {
        result += `${str}`;
    }
    return result;
}

// 3 задача

const room = (student, desk) => {
    if (student == desk * 2 || student + 1 == desk * 2) return 'все отлично';
    return (student - desk * 2 > 0) ? `не хватает ${Math.ceil(student / 2 - desk)} парт` : `лишних ${Math.floor(desk - student / 2)} парт`;
}

// 4 задача

const grading = (grade) => {
    if (grade <= 0 && grade > 10) return 'нет таких';
    switch (grade) {
        case 1:
        case 2: return 'Unsatisfactory';
        case 3:
        case 4: return 'Satisfactory';
        case 5: return 'Almost good';
        case 6: return 'Good';
        case 7: return 'Very good';
        case 8: return 'Almost excellent';
        case 9: return 'Excellent';
        case 10: return 'Brilliant';
    }
}

// 5 задача

const expectZero = () => {
    var isItZero;
    do {
        isItZero = +prompt('Введите число');
    } while (isItZero != 0)
    return;
}

// 6 задача

const expect100 = () => {
    var sum = 0;
    var i = 0;
    while (sum < 100) {
        i++;
        sum += +prompt('Введите число');
    }
    console.log(sum);
    return i;
}

// 7 задача

const isPrime = (num) => {
    if (num <= 0) return 'Неа';
    var priming = true;
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            priming = false;
            break;
        }
    }
    return priming;
}

// 8 задача

const monthSeason = (month) => {
    if (month <= 0 && month > 12) return 'нет таких';
    switch (month) {
        case 1:
        case 2:
        case 12: return 'зима'; break;
        case 3:
        case 4:
        case 5: return 'весна'; break;
        case 6:
        case 7:
        case 8: return 'лето'; break;
        case 9:
        case 10:
        case 11: return 'осень'; break;
    }
}

// 9 задача

const from99To10 = () => {
    for (let i = 99; i >= 10; i--) {
        if (i % 10 == 7 || i % 7 == 0) console.log(i);
    }
}

// 10 задача

const findDivisors = (num) => {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) divisors.push(i);
    }
    return divisors;
}

const findDivisorsFrom2To20 = () => {
    let divisors;
    let amountDivisors = 0;
    for (let i = 2; i <= 20; i++) {
        divisors = findDivisors(i);
        console.log(`Делители числа ${i}: ${divisors.join()}`);
        amountDivisors += divisors.length;
    }
    return amountDivisors;
}

// 11 задача

const findDivisorsFromXToY = (x, y) => {
    if (x <= 0 || y <= 0) return `Проверьте исходные данные`
    if (y < x) { x += y; y = x - y; x = x - y }
    let divisors;
    let amountDivisors = 0;
    for (let i = x; i <= y; i++) {
        divisors = findDivisors(i);
        console.log(`Делители числа ${i}: ${divisors.join()}`);
        amountDivisors += divisors.length;
    }
    return amountDivisors;
}

// 12 задача

const convertToByte = (size, unit) => {
    if (typeof size !== 'number') return `Проверьте исходные данные`;
    unit = unit.toLowerCase();
    switch (unit) {
        case 'kb':
        case 'кб': return 1024 * size;
        case 'mb':
        case 'мб': return 1024 * 1024 * size;
        case 'gb':
        case 'гб': return 1024 * 1024 * 1024 * size;
        default: return `Проверьте исходные данные`;
    }
}

// 13 задача

const findGreatestCommonDivisor = (numb1, numb2) => {
    if (numb2 < numb1) { numb2 += numb1; numb1 = numb2 - numb1; numb2 = numb2 - numb1 }
    for (let i = numb1; i >= 1; i--) {
        if (numb1 % i == 0 && numb2 % i == 0) return i;
    }
}

// 14 задача

const findGCDByRecursion = (numb1, numb2) => {
    if (numb2 < numb1) { numb2 += numb1; numb1 = numb2 - numb1; numb2 = numb2 - numb1 }
    if ((numb2 = numb2 % numb1) == 0) return numb1;
    return findGCDByRecursion(numb1, numb2);
}

// 15 задача

const words = (n) => {
    var lastNumb = +n.toString()[n.toString().length - 1];
    if (+n.toString()[n.toString().length - 2] == 1) { console.log(`${n} карандашей`); return; }
    switch (+n.toString()[n.toString().length - 1]) {
        case 1: console.log(`${n} карандаш`); break;
        case 2:
        case 3:
        case 4: console.log(`${n} карандаша`); break;
        default: console.log(`${n} карандашей`);
    }
}

// 16 задача

const isItSumOfSquares = (n) => {
    if (n > 9 ** 2 + 9 ** 2 || n < 0 || Math.round(n) !== n) return false;
    for (let i = 0; i <= n - i ** 2; i++) {
        if (Math.round(Math.sqrt(n - i ** 2)) == Math.sqrt(n - i ** 2)) return true;
    }
    return false;
}