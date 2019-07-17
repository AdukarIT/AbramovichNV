$(document).ready(function () {

    $.getJSON('https://jsonplaceholder.typicode.com/users/', function (data) {
        $.each(data, function (key, val) {
            $('<option value="' + val.id + '">' + val.name + '</option>').appendTo('select');
        });
    });

    $('button').click(function () {
        $('.container')[0] ? $('.container').html('') : $('<div class="container"></div>').appendTo('body');
        $.getJSON('https://jsonplaceholder.typicode.com/users/' + $('select').val(), function (data) {
            function addParagraph(data) {
                $.each(data, function (key, val) {
                    $('<p class="title">' + key + '</p>').appendTo('div');
                    if (typeof (val) == 'object') {
                        addParagraph(val);
                    } else {
                        $('<p class="content">' + val + '</p>').appendTo('div');
                        return;
                    }
                });
            }
            addParagraph(data);
        });
    })
});
