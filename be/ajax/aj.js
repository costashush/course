$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://wpwith.us/manifest.json",
        dataType: 'json',
        cache: false,
        data: {
            user: $("#user").val(),
            password: $("password").val()
        },
        success: function(data) {
            if (data.error != "OK") {
                $("#message").html('ERROR<br>' + data.msg);
            } else {
                $("#message").html('OK<br>' + data.msg);
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + "\n" + XMLHttpRequest.responseText);
        }
    })
});