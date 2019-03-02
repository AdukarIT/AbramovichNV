// task 1
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    return (new Date()).getFullYear() - this.year;
  }
}

// task 2
var ingr = {
  bun: {
    cal: 50,
    cost: 40
  },
  cheese: {
    cal: 70,
    cost: 80
  },
  onion: {
    cal: 10,
    cost: 10
  },
  meat: {
    cal: 100,
    cost: 111
  },
  vegetables: {
    cal: 25,
    cost: 25
  },
  sauce: {
    cal: 20,
    cost: 15
  }
}

class Burger {
  constructor(bun, cheese, onion, meat, vegetables, sauce) {
    this.bun = bun;
    this.cheese = cheese;
    this.onion = onion;
    this.meat = meat;
    this.vegetables = vegetables;
    this.sauce = sauce;
  }
  getCalories() {
    return this.bun * ingr.bun.cal + this.cheese * ingr.cheese.cal + this.onion * ingr.onion.cal + this.meat * ingr.meat.cal + this.vegetables * ingr.vegetables.cal + this.sauce * ingr.sauce.cal;
  }
  getCost() {
    return this.bun * ingr.bun.cost + this.cheese * ingr.cheese.cost + this.onion * ingr.onion.cost + this.meat * ingr.meat.cost + this.vegetables * ingr.vegetables.cost + this.sauce * ingr.sauce.cost;
  }
}

// task 3
addEventListener('DOMContentLoaded', function () {
  var nowTime = new Date();
  document.getElementById('time').value = nowTime.toTimeString().slice(0, 5);
  document.getElementById('remind-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const func = () => {
      document.getElementById('remind-audio').play();
      alert(document.getElementById('remind').value);
    }
    var remindTime = document.getElementById('time').value;
    var delay = (remindTime.slice(0, 2) - nowTime.toTimeString().slice(0, 2)) * 60 + (remindTime.slice(3) - nowTime.toTimeString().slice(3, 5));
    console.log(delay);
    window.setTimeout(func, delay * 60 * 1000);
    return false;
  });
})