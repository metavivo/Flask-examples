// Alessandro Valitutti


//########################################################################
//                      IMPORT



//########################################################################
//                     VARIABLES

var parameters;
var output_list;

var a;
var b;
var c;

var x1;
var x2;

var b_str;
var c_str;

//------------------------------------------------------------------------

//########################################################################
//                      FUNCTIONS
//************************************************************************
//                   applyJQuery

function applyJQuery() {
    $(document).ready(function(){
	    applyJQuery1()
    });
}

//------------------------------------------------------------------------

function applyJQuery1() {

    $(".sol").hide();
    $("#solutions").hide();


    $("button").click(function(){
//        $("#intro").hide();
        $(".intro").hide();
        $("#eq_generica").hide();
        $("button").hide();
        $(".sol").show();
        $("#solutions").show();
    });


    $.ajax({
        type: 'POST',
        url: "/app3_get_parameters",
        async: false,
        data: JSON.stringify({}),
        contentType: 'application/json;charset=UTF-8',
        success: function(response){
        output = response;
        }
    });

//    $('#output').text('output = ' + output);

   output_list = output.split(" ");

    a = output_list[0]
    b = output_list[1]
    c = output_list[2]
    x1 = output_list[3]
    x2 = output_list[4]

   $('#a').text('a = ' + a);
   $('#b').text('b = ' + b);
   $('#c').text('c = ' + c);

   $('#eq').text(get_equation_str(a, b, c));

var delta = b * b - 4 * a * c;


var new_jax =   '\$\$\\Delta = b^{2} - 4ac = ' + get_str_prod(b) + '^{2} - 4 \\cdot ' + get_str_prod(a) + ' \\cdot ' + get_str_prod(c) + ' = ' + delta + '\$\$'
//$('#step1').append(new_jax + '');
//MathJax.Hub.Queue(["Typeset",MathJax.Hub,'list']);
//var queue = MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
//var queue = MathJax.Hub.Queue(["Typeset",MathJax.Hub, $('#step1')]);
//MathJax.Hub.Queue(["Typeset",MathJax.Hub, $('#step1')]);


var $el = $('#step1');
$el.empty();
$el.append(new_jax);
//MathJax.Hub.Queue(['Typeset', MathJax.Hub, $el[0]]);
//MathJax.Hub.Queue(['Typeset', MathJax.Hub, $el]);


var bneg = -1 * b;
mysqrt = Math.sqrt(delta);
double_a = a * 2;


//        

//        \\frac{1}{2}

new_jax =   '\$\$\\implies x_{12} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{' + '-' + get_str_prod(b) + ' \\pm \\sqrt{' + delta + '}}{' + double_a + '} = \\frac{' + bneg + ' \\pm ' + mysqrt + '}{' + double_a + '}\$\$'
$el = $('#step2');
$el.empty();
$el.append(new_jax);
//MathJax.Hub.Queue(['Typeset', MathJax.Hub, $el[0]]);
//MathJax.Hub.Queue(['Typeset', MathJax.Hub, $el[0]]);



//new_jax =   '\$\$\\Delta = b^{2} - 4ac = ' + get_str_prod(b) + '^{2} - 4 \\cdot ' + get_str_prod(a) + ' \\cdot ' + get_str_prod(c) + ' = ' + delta + '\$\$'
//$('#step2').append(new_jax + '');
//MathJax.Hub.Queue(["Typeset",MathJax.Hub,'list']);
//MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
//queue(["Typeset",MathJax.Hub]);
//queue.Push(["Typeset",MathJax.Hub, $('#step2')]);
//queue(["Typeset",MathJax.Hub, $('#step2')]);
//MathJax.Hub.Queue(["Typeset",MathJax.Hub, $('#step2')]);



/*
var new_jax =   '\$\$\\Delta = b^{2} - 4ac = ' + get_str_prod(b) + '^{2} - 4 \\cdot ' + get_str_prod(a) + ' \\cdot ' + get_str_prod(c) + ' = ' + delta + '\$\$'
//var new_jax =   '\$\$\\implies x_{12} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{' + '-' + get_str_prod(b) + ' \\pm \\sqrt{' + delta + '}}{' + double_a + '} = \\frac{' + bneg + ' \\pm ' + mysqrt + '}{' + double_a + '}\$\$'
//   = \\frac{' + bneg + ' \\pm ' + mysqrt + '}{' + double_a + '}\$\$'
//new_jax =   '\$\$ \\implies x_{12} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = ' +  '\\frac{1}{2}' + '\$\$'
//new_jax =   '\$\$ \\implies x_{12} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a} = \\frac{' + '-' + get_str_prod(b) + ' \\pm \\sqrt{' + delta + '}}{' + double_a + '} \$\$'
//$('#step2').append(new_jax + '');
//$('#step2').append(new_jax);
$('#step2').text(new_jax);
//MathJax.Hub.Queue(["Typeset",MathJax.Hub,'list']);
MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
*/

$('#solutions').text('Le due soluzioni sono dunque ' + x1 + ' e ' + x2 + '.');






// $$\require{cancel}
//     \implies \left\{\begin{matrix} 

//x_{1} = \frac{-5 -3}{2} =  \frac{-\cancel{8}^{4}}{\cancel{2}_{1}} = -4

// \\
 
// x_{2} = \frac{-5 + 3}{2} =  \frac{-\cancel{2}^{4}}{\cancel{2}_{1}} = -1

 //  \end{matrix}\right. $$







 // '$$\implies \Delta = b^{2} - 4ac = 5^{2} - 4 \cdot 1 \cdot 4 = 25 - 16 = 9$$'



 //get_str_prod(a)






 //$('#step1').text('PROVA');

//   var math = MathJax.Hub.getAllJax("MathDiv")[0];
//   MathJax.Hub.Queue(["Text",math,"x+1"]);



 

//  var jax = ['\\(\\mathbb{Q}\\)','\\(\\mathbb{Z}\\)'];
/*
var jax = ['\\(\\implies \\)'];

  function listArray(array,div){
    for(var i=0; i<array.length; i++){
      $('#'+div).append('<li>'+array[i]+'</li>'); 
    }
    MathJax.Hub.Queue(["Typeset",MathJax.Hub,div]);
  };
  
  listArray(jax,'list');
*/



}

//************************************************************************
//                   get_a_str

function get_a_str(a) {
    if (a == 1) {
        return ''
    } else if (a == -1) {
        return '-'
    }
    else {
        return a
    }
}

//************************************************************************
//                   get_b_str

function get_b_str(b) {
    if (b == 1) {
        return '+'
    } else if (b == -1) {
        return '-'
    } else if (b > 0) {
        return '+' + b
    } else {
        return b
    }
}

//************************************************************************
//                   get_c_str

function get_c_str(c) {
    if (c == 1) {
        return '+'
    } else if (c == -1) {
        return '-'
    } else if (c > 0) {
        return '+' + c
    } else {
        return c
    }
}

//************************************************************************
//                   get_equation_str

function get_equation_str(a, b, c) {
    if (b != 0 && c !=0) {
        return '$$' + get_a_str(a) + 'x^2' + get_b_str(b) + 'x' + get_c_str(c) + '= 0' + '$$';
    } else if (b != 0) {
        return '$$' + get_a_str(a) + 'x^2' + get_b_str(b) + 'x' + '= 0' + '$$';
    } else {
        return '$$' + get_a_str(a) + 'x' + get_c_str(c) + '= 0' + '$$';
    }
}

//************************************************************************
//                   get_str_prod

function get_str_prod(num) {
    if (num > 0) {
        return num
    } else {
        return '(' + num + ')'
    }
}

//************************************************************************
//                   newMath

function newMath() {

    var math = MathJax.Hub.getAllJax("step1")[0];
  //  MathJax.Hub.Queue(["Text",math,"aaaaaaa"]);
 



//    var math = null;               

/*
     MathJax.Hub.queue.Push(function () {
      math = MathJax.Hub.getAllJax("step1")[0];
    });
*/
    
//    MathJax.Hub.queue.Push(["Text",math,"\\displaystyle{"+PROVAAAA+"}"]);
    MathJax.Hub.queue.Push(["Text",math,"AAAAA"]);
  

  }

//#########################################################################
//                    INSTRUCTIONS
//-------------------------------------------------------------------------



applyJQuery();

//newMath();

//*************************************************************************





