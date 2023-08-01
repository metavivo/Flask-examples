// Alessandro Valitutti



//#########################################################################
//                      IMPORT



//#########################################################################
//                     VARIABLES

var people;

var val;

var accumChar = '';

var lastWordAccum;

var lastWord;

var wordList;

var codeDown;

var newTextArea;

var flag;

//------------------------------------------------------------------------

//#########################################################################
//                      FUNCTIONS
//************************************************************************
//                   getAutocomplete

function getAutocomplete(inputText, newWord) {
    return inputText.replace(/^(.*)(..)$/, '$1' + newWord);
}

//************************************************************************
//                   applyJQuery

function applyJQuery() {
    $(document).ready(function(){
	applyJQuery1()
    });
}

//------------------------------------------------------------------------

function applyJQuery1() {

    $('#intro').text('Write some text below:');

    // txtarea -> keyup
    
    $("#txtarea").keyup(function(e){
	if (flag) {
	    $('#txtarea').val(newTextArea);	
	    flag = false;
	} 
      	$('#keyup').text('keyup = ' + codeDown);
    });

    // txtarea -> keydown
    
    $("#txtarea").keydown(function(e){
	codeDown = e.keyCode || e.which;
      	$('#keydown').text('keydown = ' + codeDown);
	if (codeDown == 8) {	
	    lastWordAccum = lastWordAccum.substr(0, lastWordAccum.length - 1);
	    $('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);
	}
    });

    // txtarea -> keypress
    
    $("#txtarea").keypress(function(e){
	code = e.keyCode || e.which;
       	$('#keypressed').text('keypressed = ' + code);
	var newVal = val + String.fromCharCode(e.which);
	var lastChar = String.fromCharCode(e.which);
	$('#lastchar').text('lastChar = ' + lastChar);
	accumChar = accumChar + lastChar;
	$('#accumchar').text('accumchar = ' + accumChar);
	if (/^[a-zA-Z]/.test(lastChar)) {
	    lastWordAccum = lastWordAccum + lastChar;
	    $('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);
	    $('#lastword').text('lastword = ' + lastWord);
	    $('#people').text('people = ' + people.join(', '));
	    if (lastWordAccum.length == 3) {
		var reg = new RegExp('^' + lastWordAccum.substring(0, 3), 'i');
  		var output = people.filter(function(x) {
		    if (x.match(reg)) {
       			return x;
     		    }
 		});
		if (output.length > 0) {
		    var newWord = output[Math.floor(Math.random()*output.length)];
		    $('#newword').text('newword = ' + newWord);
		    lastWord = newWord;		
		    $('#lastword').text('lastword = ' + lastWord);
		    lastWordAccum = '';	     	  	
		    $('#lastwordaccum').text('lastwordaccum = ' + lastWordAccum);
		    wordList.push(lastWord);
		    var wordListString = '[' + wordList.join(', ') + ']';
		    $('#wordlist').text('wordlist = ' + wordListString);

		    // new text (form autocomplete) to be replaced in the textarea
		    newTextArea = getAutocomplete($('#txtarea').val(), newWord);
		    
		    $('#newtextarea').text('newtextarea = ' + newTextArea);
		    flag = true;
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
}

//#############################################################################
//                    INSTRUCTIONS
//------------------------------------------------------------------------

people = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

lastWordAccum = '';

lastWord = '';

wordList = [];

codeDown = '';

newTextArea = '';

flag = false;

//------------------------------------------------------------------------

applyJQuery();

//************************************************************************





