$(document).ready(function(){

    var container = $("#container");
    var userText = $('#userText'); 

    userText.shuffleLetters();

    $("button").click(function(){

        container.shuffleLetters();
        
    });

});

