$(document).ready(function () {
    var dialogAdd, dialogConfirm, form;
    var table = $('#table_id').DataTable();
    var name = $('#name');
    var phone = $('#phone');
    var type = $('#type');
    var allFields = $([]).add(name).add(phone);

    function checkRegexp(o, regexp) {
        if (!(regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            return false;
        } else {
            return true;
        }
    }

    function addStatement() {
        var valid = true;
        allFields.removeClass("ui-state-error");
        valid = valid && checkRegexp(name, /^[a-z]([0-9a-z_\s])+$/i);
        valid = valid && checkRegexp(phone, /(\+375)([0-9]{9})/);
        if (valid) {
            table.row.add([name.val(), phone.val(), new Date, type.val()]).draw();
            dialogAdd.dialog("close");
        }
        return;
    }

    function removeStatement() {
        $("tr.ui-selected").each(function(e) {
            table.row(this).remove().draw();
        });
    }

    dialogAdd = $("#dialog_form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Create an account": addStatement,
            Cancel: function () {
                dialogAdd.dialog("close");
            }
        },
        close: function () {
            form[0].reset();
        }
    });

    dialogConfirm = $( "#dialog_confirm" ).dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Delete all items": function() {
            $( this ).dialog( "close" );
            removeStatement()
          },
          Cancel: function() {
            $( this ).dialog( "close" );
          }
        }
      });

    $('tbody').selectable();

    form = dialogAdd.find("form").on("submit", function (event) {
        event.preventDefault();
        addStatement();
    });

    $("#create-statement").button().on("click", function () {
        dialogAdd.dialog("open");
    });

    $("#remove-statement").button().on("click", function () {
        dialogConfirm.dialog("open");
    });
});
