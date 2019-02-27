addEventListener('DOMContentLoaded', function () {
    // task 1
    let newOption = new Option('4444', 4);
    newOption.innerText = '4444';
    document.getElementById('select').appendChild(newOption);
    const options = document.getElementById('select').querySelectorAll('option');
    document.getElementById('select').oninput = () => {
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                console.log(options[i].value)
            }
        }
    }

    // task 2

    const credit = () => {
        let money;
        let forDiv;
        document.getElementById('first').innerText = 'было:\n' + document.getElementById('sum').value;
        if (document.getElementById('capital').checked) {
            money = +document.getElementById('sum').value + +document.getElementById('sum').value * document.getElementById('months').value / 100 + 1;
            document.getElementById('last').innerText = 'стало:\n' + money;
            forDiv = money / document.getElementById('sum').value * 50;
            document.getElementById('last_div').setAttribute('style', `background: linear-gradient(to right, red ${forDiv}%, transparent ${forDiv}%)!important`)

        } else {
            money = +document.getElementById('sum').value + +document.getElementById('sum').value * document.getElementById('months').value / 100;
            document.getElementById('last').innerText = 'стало:\n' + money;
            forDiv = money / document.getElementById('sum').value * 50;
            document.getElementById('last_div').setAttribute('style', `background: linear-gradient(to right, red ${forDiv}%, transparent ${forDiv}%)!important`)
        }
    }

    document.getElementById('calc-form').oninput = credit;

    // task 3

    let rgx1 = /\.{3}/g

    // task 4

    let rgx2 = /(?<!-)\b\d+((\.|\,)?)+\d+/g

    // task 5

    let rgx3 = /#([a-f\d]{6}|[a-f\d]{3})(?=\W)/gi

    // task 6

    ''.match(/^$/);

    // task 7
    document.getElementById('reg-button').addEventListener('click', function() {
        var password = document.getElementById('password');
        var email = document.getElementById('email');
        var emailRgx = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
        var passwordRgx = /((?=.*d)(?=.*[a-z])(?=.*[@#$%]).{6,})/i;
        if (!emailRgx.test(email.value)) {
            alert('Проверьте email');
            return false;
        }
        if (!passwordRgx.test(password.value)) {
            alert('Проверьте пароль');
            return false;
        }
        alert('Всё хорошо');
    })
})