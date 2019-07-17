$(document).ready(function () {
    var dialog, form;
    var table = $('#table_id').DataTable();

    var name = $("#name")[0].value;
    var phone = $("#phone")[0].value;
    var type = $("#type")[0].value;

    function addStatement() {
        table.row.add([name, phone, new Date, type]).draw();
        dialog.dialog("close");
        return;
    }

    dialog = $("#dialog_form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Create an account": addStatement,
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
        }
    });

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        addStatement();
    });

    $("#create-statement").button().on("click", function () {
        dialog.dialog("open");
    });
});
