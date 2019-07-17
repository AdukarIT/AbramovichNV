$(document).ready(function () {

    $.getJSON('https://jsonplaceholder.typicode.com/albums', function (data) {
        $.each(data, function (key, val) {
            $('<option value="' + val.id + '">' + val.title + '</option>').appendTo('select');
        });
    });

    $('button').click(function () {
        $('.container')[0] ? $('.container').html('') : $('<div class="container"></div>').appendTo('body');
        $.getJSON('https://jsonplaceholder.typicode.com/photos?albumId=' + $('select').val(), function (data) {
            $.each(data, function (key, val) {
                $(`<img src=${val.thumbnailUrl} title='${val.title}' alt='${val.title}'>`).appendTo('.container');
            });
        });
    })
});
