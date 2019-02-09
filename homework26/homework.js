// 1 задача

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

const amountOfTheSymbol = (arr, symb) => arr.reduce((acc, current) => acc += current.howManySubstr(String.fromCharCode(symb)), 0);

// 2 задача

const letterCounter = symbCode => arr => amountOfTheSymbol(arr, symbCode);

// 3 задача

const cities = JSON.parse(fs.readFileSync('uscities.json', 'utf-8'));

const growingCaliforniaCities = cities => cities.filter(a => a.state == "California" && Number.parseInt(a.growth_from_2000_to_2013) > 0);

// 4 задача

const populationInTheLatitudes = cities => cities.reduce((acc, el) => el.latitude > 25 && el.latitude < 30 ? acc += +el.population : acc, 0);

// 5 задача

const sortAndFilterCities = cities => cities.filter(el => el.city[0] == 'D').sort((a, b) => a.city > b.city ? 1 : -1);

// 6 задача

const citiesArrToStatesArr = cities => {
  let plus;
  return cities.reduce((acc, el) => {
    if (!(el.state in acc)) acc[el.state] = [];
    acc[el.state] = acc[el.state].concat({ 'city': el.city, 'population': el.population, 'rank': el.rank });
    return acc;
  }, new Object())
}
