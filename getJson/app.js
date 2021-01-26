$(document).ready(function () {
    $.getJSON("data.json")
        .done(function (data, textStatus, jqXHR) {
            for (var i in data) {
                $('#area').append('<option value=' + i + '>' + data[i] + '</option>');
            }
            if ($('#area').children('option').length == 0) {
                $("#btn").prop("disabled", true);
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
        })
});