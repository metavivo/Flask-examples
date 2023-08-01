$(document).ready(function(){

    $(".sol").hide();
    $("#solution").hide();


    $("button").click(function(){
        $("#intro").hide();
        $("#eq").hide();
        $("button").hide();
        $(".sol").show();
        $("#solution").show();
    });




});

