// This is the sequence for the calculator
$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
		if (operator === "+"){
			number = (parseInt(newnumber, 10) + parseInt(number,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		} else if (operator === "^2"){
            number = (parseInt(newnumber, 10) * 2).toString(10);
        }
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
}); //End of function for calculator

//Beginning of Future Investment equation code
$(document).ready(function(){
$('#submit').click(function(){
  var princeple = parseFloat($('#princeple').val());  // "[$('princeple').val()] is the entire string /number/ for parseInt. the .val() is what converts #princeple from a string to a number, allowing it to be input into parseInt.
  var time = parseFloat($('#time').val());
  var rate = parseFloat($('#rate').val()/100);
    var compounds = parseInt($('#compounds').val());
  var output = (princeple * (Math.pow((1 + rate), (time)))).toFixed(2);
  if(output == 'NaN')
    output = 0;

  $('#result').html(output + ' RUB ');
  //prevent from page reload
  return false;

});

});
// End of Future Investment equation code