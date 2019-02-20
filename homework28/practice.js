$(document).ready(function () {
    // task1
    $("#draggable").draggable();
    function getPosition(event) {
        document.getElementById('getX').innerText = 'X: ' + Math.round($("#draggable").offset().left);
        document.getElementById('getY').innerText = 'Y: ' + Math.round($("#draggable").offset().top);
    }
    document.onmousemove = getPosition
    $('input').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    // task2
    function mouseMove(event) {
        document.getElementById('task2X').innerText = 'X: ' + Math.round(event.pageX - $("#task2").position().left);
        document.getElementById('task2Y').innerText = 'Y: ' + Math.round(event.pageY - $("#task2").position().top);
    }
    document.getElementById('task2').onmousemove = mouseMove
    $('input').bind("change keyup input click", () => {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    // task3
    document.getElementsByClassName('directory')[0].ondblclick = (() => { document.getElementsByClassName('directory')[0].classList.toggle('open-directory') });
})
