addEventListener('DOMContentLoaded', function () {
    // task 1
    document.getElementById('input_task1');
    document.getElementById('button_task1').onclick = () => {
        document.getElementById('button_task1').parentNode.insertBefore(document.getElementById('input_task1').cloneNode(), document.getElementById('button_task1'));
    }
    // task 2
    const changeClasses = (i = 0) => () => {
        switch (i) {
            case 0: document.getElementById('table_task2').classList.remove('striped', 'highlight');
                document.getElementById('table_task2').classList.add('bordered'); i = 1; break;
            case 1: document.getElementById('table_task2').classList.remove('bordered', 'highlight');
                document.getElementById('table_task2').classList.add('striped'); i = 2; break;
            case 2: document.getElementById('table_task2').classList.remove('striped', 'bordered');
                document.getElementById('table_task2').classList.add('highlight'); i = 0; break;
            default: break;
        }
    }
    document.getElementById('table_task2').onclick = changeClasses(i = 0);
    // task 3
    var radioButtons = document.querySelectorAll("input[name='radio_task3']");
    document.querySelector("form[name='radio_task3']").onclick = () => {
        for (let i = 0; i < 3; i++) {
            if (radioButtons[i].checked) { changeClasses(i)() };
        }
    }
    // task 4
    document.getElementById('button_task4').onclick = function () {
        alert(this.innerText)
    }
    // task 5
    var elementsTask5 = document.querySelectorAll(".element_task5");
    for (let i = 0; i < elementsTask5.length; i++) {
        elementsTask5[i].onclick = function () {
            alert(this.tagName);
        }
    }
    // task 6
    document.getElementById('img_task6').onmouseover = function () {
        this.src = 'https://3.404content.com/resize/730x-/1/66/C5/568655661727221500/fullsize.jpg'
    }
    document.getElementById('img_task6').onmouseout = function () {
        this.src = 'https://otvet.imgsmail.ru/download/918ea0779c19430abc55681a53e5e67d_i-238.jpg'
    }
    // task 7

    const images = document.getElementsByClassName('img_task7');
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            console.dir(this);
            this.classList.toggle('fancybox-img');
            document.getElementById('fancybox-overlay').classList.toggle('hidden');
            this.style.top += (window.pageYOffset || document.documentElement.scrollTop);
        }
    }
})
