$(document).ready(function() {
    document.querySelector('#form1').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("成功阻止submit默认事件");
    }, false);
        var x = ($('html').height() - 700) / 2;
        $('body').css("margin-top", x);
    $(window).resize(function() {
    	var x = ($('html').height() - 700) / 2;             //保持body垂直居中。
        $('body').css("margin-top", x);
    });

})
