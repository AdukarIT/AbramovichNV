// Task 1

const theSmallestNumber = (arg1, arg2, arg3) => {
    if (arg1 < arg2 && arg1 < arg3) {
        return arg1;
    } else return (arg2 < arg3) ? arg2 : arg3;
}

// Task 2

const convertToSeconds = (dayAmount, hourAmount, minAmount) => {
    return dayAmount * 24 * 3600 + hourAmount * 3600 + minAmount * 60;
  }

// Task 3
  
const factorial = (number) => {
    if (number === 1) return 1;
    return number * factorial(number - 1);
}

// Task 4

const reverseNumber = (number) => {
    if (number < 10) return number;
    return `${number % 10}` + reverseNumber((number - (number % 10)) / 10);
}

// Task 5

const quadratic = (a, b, c) => {
    if (a === 0) console.log('Это не квадратное уравнение');
    const d = b ** 2 - 4 * a * c;
    if (d < 0) {
        console.log('Корней нет');
        return 0;
    }
    if (d === 0) {
        console.log(`Корень уравнения: ${- b / (2 * a)}`);
        return 1;
    }
    console.log(`Корни уравнения: ${(- b + Math.sqrt(d)) / (2 * a)}, ${(- b - Math.sqrt(d)) / (2 * a)}`);
    return 2;
}