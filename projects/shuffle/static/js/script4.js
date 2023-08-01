$(document).ready(function(){

    var container = $("#container");
    var userText = $('#userText'); 

    userText.shuffleLetters();

/*
    userText.click(function (e) {
        if(e.which === 13){
            container.shuffleLetters();
        }
*/



userText.click(function () {
		
    userText.val("");
    
  }).bind('keypress',function(e){
      
      if(e.keyCode == 13){
          
          // The return key was pressed
          
          container.shuffleLetters({
              "text": userText.val()
          });
          
          userText.val("");
      }

  });

/*
    userText.keyup(function (e) {
            if ($(".input1").is(":focus") && (e.keyCode == 13)) {
                container.shuffleLetters();
            }
        });
*/


/*        
    userText.click(function () {
		
        container.shuffleLetters();
        
    });
*/




});

