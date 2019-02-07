// 1 задача

const verify = (obj, key) => {
    return Object.keys(obj).includes(key);
}

// 2 задача

var punch = {
    name: 'Пунш',
    ingredients: [
        { name: 'Dark Rum', amount: 75, unit: 'ml' },
        { name: 'Dry Red Wine', amount: 75, unit: 'ml' },
        { name: 'Strong Blewed Tea', amount: 4.8, unit: 'tbsp' },
        { name: 'Sugar', amount: 3.2, unit: 'tbsp' },
        { name: 'Orange Juice', amount: 0.8, unit: 'tbsp' },
        { name: 'Lemon Juice', amount: 0.8, unit: 'tbsp' },
        { name: 'Seasonal Fruits', amount: 3.2, unit: 'tbsp' }
    ],
    serving: 2
}

const dishForOne = (dish) => {
    const k = dish.serving;
    console.log('На одну порцию пунша нужно:')
    dish.ingredients.forEach(a => console.log(`${a.name}, ${(a.amount / k)} ${a.unit}`));
}

// 3 задача

var cylinder = {
    radius: 5,
    height: 30,
    getVolume: function () { return Math.round(Math.PI * (this.radius ** 2) * this.height) }
}

// 4 задача

var penguin = {
    name: 'Tux',
    createBy: 'Larry Ewing',
    source: 'Linux',
    canFly: false,
    sayHello: function () { console.log(`Hi, I\'m ${this.name}`) },
    fly: function () { console.log(`${this.name}${this.canFly ? '' : ' не'} умеет летать`) }
}