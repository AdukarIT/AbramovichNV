// task 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    get salary() {
        return this.rate * this.days;
    }
}

const petya = new Worker('petr', 'pop', 5, 25);
console.log(petya.salary);

// task 2
class User {
    constructor(name, password) {
        this.name = name;
        this._password = password
    }
    login(nameToLogin, pwdToLogin) {
        return (nameToLogin == this.name && pwdToLogin == this._password)
    }
    changeName(newName) {
        this.name = newName
    }
}

class Admin extends User {
    constructor(_password) {
        super("admin", _password)
    }
    login(pwdToLogin) {
        if (this._password == pwdToLogin) console.log('админ пришёл')
    }
    changeName(newName) {
        console.log('низя')
    }
}

// task 3
class Machine {
    constructor() {
        this.enabled = false
    }
    turnOn() {
        this.enabled = true
    }
    turnOff() {
        this.enabled = false
    }
}

class Fridge extends Machine {
    turnOn() {
        super.turnOn();
        console.log(this.enabled)
    }
    turnOff() {
        super.turnOff();
        console.log(this.enabled)
    }
}

// task 4
class MyString {
    reverse(str) {
        return reverseString(str);
    }
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        return str.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
    }
}

// task 5
class Validator {
    isEmail(str) {
        return (/[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i.test(str))
    }
    isDomain(str) {
        return (/\w{3,5}\:\/\/\w+.(\w+\.\w{2,4})|\w{3,5}\:\/\/(\w+\.\w{2,4})/.test(str))
    }
    isDate(str) {
        return (/^(0?[1-9]|1[0-2])[\.](0?[1-9]|[12]\d|3[01])[\.](19|20)\d{2}$/.test(str))
    }
    isPhone(str) {
        return (/(\+375)((\s(33|29|44|25|232)\s)|((33|29|44|25|232)))([0-9]{7})/.test(str))
    }
}