$(document).ready(function() {
    $("#logbtn").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            url: "http://bimqh.ecidi.com:6530/accounts/api/user/login2/",
            type: 'post',
            dataType: 'json',
            timeout: 10000,
            data: {
                username: username,
                password: password
            },
            success: function(d) {
                alert(d.account.person_name + "您好"); //注意:json是对象
            },
            error: function(jqxhr, textStatus, errorThrow) { alert(errorThrow); },
            statusCode: {
                404: function() { alert('not found'); },
                500: function() { alert('error by server'); },
            }
        });
    });

    $("#regbtn").click(function() {
        window.open("index.html");
    });
})
