$(document).ready(function () {

    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            console.dir(this);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    $('#form').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                regex: /([A-Z])\w+/
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                regex: /(\+375)([0-9]{9})/
            },
            message: {
                required: true,
                minlength: 10,
                maxlength: 1000
            }
        },
        messages: {
            message: {
                minlength: jQuery.validator.format('At least 10 characters are necessary'),
                maxlength: jQuery.validator.format('Maximum 1000 characters allowed!')
            }
        },
        success: function (label) {
            label.addClass("valid").text("✓")
        }
    });

});