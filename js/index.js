$(document).ready(function() {
    $("#select_id").change(function() {
        var selected = $(this).children('option:selected').val()
            // alert(selected);
        if (selected == "order_time") {
            //document.getElementById("search_content_id").
            $("#search_content_id")[0].placeholder = "时间格式：20150923";
        } else if (selected == "order_id") {
            $("#search_content_id")[0].placeholder = "";
        }
    });
});
