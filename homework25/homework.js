const getRandomArray = (len, min, max) => new Array(len).fill(1).map(a => Math.round(Math.random() * (max - min) + min));

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

// 1 + 2 задача

const rebuilderNumberArray = arr => {
  console.log(arr);
  return arr.map(el => {
    let sqrt = Math.sqrt(el);
    return {
      initial: el,
      sqrt: sqrt,
      roundSqrt: Math.round(sqrt * 100) / 100,
      floor: (Math.floor(sqrt) === Math.round(sqrt)),
      ceil: (Math.ceil(sqrt) === Math.round(sqrt))
    }
  });
}

// 3 задача

const ifPolindrom = str => {
  let strAct = str.split(' ').join('');
  let i = 0;
  do {
    if (strAct[i] != strAct[strAct.length - 1 - i]) return false;
    i++;
  } while (i < strAct.length / 2)
  return true;
}

// 4 задача

const whichSymbolOftenMeet = (str) => {
  let verified = '';
  let counter = 0;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!verified.includes(str[i])) {
      verified += str[i];
      if (str.howManySubstr(str[i]) > counter) {
        counter = str.howManySubstr(str[i]);
        result = str[i];
      } else if (str.howManySubstr(str[i]) == counter) { result += str[i] }
    }
  }
  return result;
}

// 5 задача

const replaceStr = (str, search, replace) => str.split(search).join(replace);

// 6 задача

const firstLetterUpperCase = str => str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

// 7 задача

const replaceToStars = str => {
  let verified = '';
  let result = str;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      continue;
    } else if (!verified.includes(str[i])) {
      verified += str[i];
    } else {
      result = result.slice(0, i) + '*' + result.slice(i + 1);
    }
  }
  return result;
}

// 8 задача

const currentDay = (date = new Date()) => {
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  return days[date.getDay()];
}

// 9 задача

const toDate = str => new Date(+str.slice(6), +str.slice(3, 5) - 1, +str.slice(0, 2));

const selectDay = str => currentDay(toDate(str));

// 10 задача

const dayToBirthday = str => {
  let birthday = toDate(str);
  let date = new Date();
  birthday.setFullYear(date.getFullYear());
  console.log(birthday.toDateString());
  if (birthday.getTime() - date.getTime() < 0) birthday.setFullYear(date.getFullYear() + 1);
  return Math.round((birthday.getTime() - date.getTime()) / 1000 / 3600 / 24);
}

const tequilaDay = str => {
  let birthday = toDate(str);
  let date = new Date();
  let nextTequilaDay = Math.ceil((date.getTime() - birthday.getTime()) / 1000 / 3600 / 24 / 1000) * 1000;
  return Math.round((nextTequilaDay * 1000 * 3600 * 24 + birthday.getTime() - date.getTime()) / 1000 / 3600 / 24);
}

// 11 задача

function ifHaveSqrt(numb) {
  try {
    if (Math.sqrt(numb) == Math.round(Math.sqrt(numb))) {
      return Math.sqrt(numb)
    } else { throw new Error(numb + ' не имеет целого корня') }
  } catch (e) {
    console.log(e.message)
  }
}

const verifyArrElements = arr => arr.map(el => ifHaveSqrt(el)).filter(el => el != undefined).toString();
