$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();        //阻止表单默认提交
        $.ajax({
            url: "http://bimqh.ecidi.com:6530/accounts/api/user/login2/",
            type: 'POST',
            timeout: 10000,
            //contentType:"application/json",错误
            data: $("form").serialize(),         
            success: function(d) {
                alert(d.account.person_name + "您好"); //注意:d是对象
            },
            error: function(jqxhr, textStatus, errorThrow) { alert(errorThrow); },
        });
    });
    $("#logbtn").click(function() {
        var username = $("#username").val();
        var password = $("#password").val();
        $.ajax({
            url: "http://bimqh.ecidi.com:6530/accounts/api/user/login2/",
            type: 'POST',
            timeout: 10000,
            //contentType:"application/json",错误
            data: {
                "username": username,
                "password": password
            },
            success: function(d) {
                alert(d.account.person_name + "您好"); //注意:d是对象
            },
            error: function(jqxhr, textStatus, errorThrow) { alert(errorThrow); },
        });
    });

    $("#regbtn").click(function() {
        window.open("index.html");
    });
})
