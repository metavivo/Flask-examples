var people = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

var val;
var accumChar = '';

lastWordAccum = '';
var lastWord = '';
var wordList = [];

codeDown = '';

var newTextArea = '';
//var newTextArea;

var flag = false;

function getAutocomplete(inputText, newWord) {

//	return inputText;

// 	return 'pippoooo';

//	return inputText.replace(/^(.+)..$/, $1newWord);
//	return inputText.replace(/^..(.*)$/, $1);
//	return inputText.replace(/.*/, newWord);

	return inputText.replace(/^(.*)(..)$/, '$1' + newWord);


 
//	return output;
}




$(document).ready(function(){

        $('#intro').text('Write some text below:');

//        $('#txtarea').text('Put text here');
//	newTextArea = '';

 	$("#txtarea").keyup(function(e){
//			val = $('#txtarea').val();
//			$('#txtarea').val(val);
//			newTextArea = $('#txtarea').val();
//			$('#txtarea').val(newTextArea);

			if (flag) {
				$('#txtarea').val(newTextArea);	
				flag = false;
			} 


      			$('#keyup').text('keyup = ' + codeDown);

	});

 	$("#txtarea").keydown(function(e){
	      	codeDown = e.keyCode || e.which;
      		$('#keydown').text('keydown = ' + codeDown);
		 if (codeDown == 8) {	
			lastWordAccum = lastWordAccum.substr(0, lastWordAccum.length - 1);
//			lastWordAccum = 'prova';
//			lastWordAccum = 'prova';
			$('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);
		}
	});




 	$("#txtarea").keypress(function(e){

	      	code = e.keyCode || e.which;
       		$('#keypressed').text('keypressed = ' + code);

		var newVal = val + String.fromCharCode(e.which);

		var lastChar = String.fromCharCode(e.which);
	       	$('#lastchar').text('lastChar = ' + lastChar);

		accumChar = accumChar + lastChar;
	       	$('#accumchar').text('accumchar = ' + accumChar);

//		if (lastChar != ' ' ) {
//		if (lastChar.match(/[a-z]/i)) {
		if (/^[a-zA-Z]/.test(lastChar)) {
//	    	  	$('#message').text('case 1');
//		     	$('#message').text(codeDown);

			lastWordAccum = lastWordAccum + lastChar;
	     	  	$('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);
		       	$('#lastword').text('lastword = ' + lastWord);


// CODE FOR AUTOCOMPLETE:

		   	$('#people').text('people = ' + people.join(', '));
			if (lastWordAccum.length == 3) {
				var reg = new RegExp('^' + lastWordAccum.substring(0, 3), 'i');
  				var output = people.filter(function(x) {
			  							     		      if (x.match(reg)) {
       												          return x;
     											           }
 								           });
				if (output.length > 0) {

//					$('#txtarea').val('nuovoooo');
//					$('#txtarea').text('Put text here');
//					$('#txtarea').val('provaaaa');


					var newWord = output[Math.floor(Math.random()*output.length)];
			     		$('#newword').text('newword = ' + newWord);

					lastWord = newWord;		
				       	$('#lastword').text('lastword = ' + lastWord);

					lastWordAccum = '';	     	  	
					$('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);

					wordList.push(lastWord);
					var wordListString = '[' + wordList.join(', ') + ']';
					$('#wordlist').text('wordlist = ' + wordListString);

					newTextArea = getAutocomplete($('#txtarea').val(), newWord);

					$('#newtextarea').text('newtextarea = ' + newTextArea);

//					$("textarea#txtarea").val(newTextArea);
//					$("textarea#txtarea").val(newTextArea.substring(0,2));
					flag = true;
//					$('#txtarea').text($("textarea#txtarea").val());

				}

			}
			

		} else {
		     	$('#message').text('case 3');
			if (lastWordAccum != '') {
				lastWord = lastWordAccum;		
			       	$('#lastword').text('lastword = ' + lastWord);
				lastWordAccum = '';	     	  	
				$('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);

				wordList.push(lastWord);
				var wordListString = '[' + wordList.join(', ') + ']';
				$('#wordlist').text('wordlist = ' + wordListString);
		}

		}

	});



});
