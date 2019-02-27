addEventListener('DOMContentLoaded', function () {
    // task 1
    function placeOrder() {
        var name = document.getElementById('name');
        var donuts = document.getElementById('donuts');
        var minutes = document.getElementById('minutes');
        var nameRgx = /[_a-zA-Z0-9а-яА-ЯёЁ ]+/g;
        var inputs = document.getElementById('order-form').querySelectorAll('input[type="text"]');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                alert('Заполните все поля');
                return false;
            }
        }
        if (!nameRgx.test(name.value)) {
            alert('Что за имя такое?)');
            return false;
        }
        if (isNaN(donuts.value)) {
            alert('Проверьте количество пончиков');
            return false;
        }
        if (isNaN(minutes.value)) {
            alert('Проверьте количество минут');
            return false;
        }
        alert('Всё хорошо');
    }
    document.getElementById('order-form').querySelector('input[type="submit"]').addEventListener('click', placeOrder)
    // task 2
    document.getElementById('send-button').addEventListener('click', () => {
        var mailBody = document.getElementById('send-mail').querySelector('input[type="text"]').value;
        if (mailBody.length > 0) {
            document.getElementById('send-mail').action = 'mailto:address@domen.domen?subject=Subject&body=' + mailBody;
        }
    })
    // task 3-4
    const textValidator = input => {
        var textRgx = /[_a-zA-Z0-9а-яА-ЯёЁ ]+/g;
        if (!textRgx.test(input.value) || !input.value) {
            input.classList.add('wrong_input');
            return false;
        } else { input.classList.remove('wrong_input') }
    }
    const emailValidator = input => {
        var emailRgx = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
        if (!emailRgx.test(input.value)) {
            input.classList.add('wrong_input');
            return false;
        } else { input.classList.remove('wrong_input') }
    }
    const formValidator = event => {
        let inputs = document.getElementById('valid-form').querySelectorAll('input')
        let valid = true;
        let isFormInputNeedFix = false;
        for (let i = 0; i < inputs.length; i++) {
            switch (inputs[i].type) {
                case 'text': valid = textValidator(inputs[i]); break;
                case 'email': valid = emailValidator(inputs[i]); break;
                default:
            }
            if (!valid) event.preventDefault();
        }
        if (document.getElementById('valid-form').querySelectorAll('.wrong_input').length == 0) alert('Приветственное сообщение')
    }
    // document.getElementById('valid-form').addEventListener('submit', formValidator);
    // task 5
    const upgradeStr = str => str.replace(/функци([а-я]{0,3})(?![а-я])/gi, '"$&"');
    // task 6
    const timeValidator = str => /(\d{1,2})+[.]+(\d{2})+[ ]+(a|p)[m]/i.test(str);
    // task 7
    const removeRepeatWord = str => str.replace(/(\w+)\W*(\1\W*){2,}/ig, (a) => a.slice(0, a.length / 2));
})