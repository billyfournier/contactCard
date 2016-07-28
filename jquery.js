$(document).ready(function(){
    $("form").submit(function(){
        var first_name = $("#first").val();
        var last_name = $("#last").val();
        var description = $("#desc").val()
        var html = '<div><h1>' + first_name + ' ' + last_name
                + '</h1><span><p>Click for description!</p></span></div>';
        $("#right-column").append(html);
        $("#right-column div:last").data("description",description);
        return false;
    });
    $(document).on("click", "#right-column div",function(){
        var tmp = $(this).html();
        var html = $(this).data("description");

        $(this).html(html);
        $(this).data("description",tmp);
    });
});
