$(document).ready(function () {

    $.getJSON("data.json")
        .done(function (data, textStatus, jqXHR) {
            for (var i in data) {
                $("#dialog1").append(data[i]+" ");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
        })

    $(function () {
        $("#dialog1").dialog({
            autoOpen: false,
            modal: true,
            title: "ダイアログ",
            buttons: {
                "確認": function () {
                    $(this).dialog("close");
                }
            }
        });

        $("#btn").on('click', function () {
            $("#dialog1").dialog('open');
        });
    });
});