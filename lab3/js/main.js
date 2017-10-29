$(".result").click( ()=>{
	let expr = $(".expression").val();
	let answer = calculate(expr);
	$(".answer").html(answer);
})
function calculate(expr)
{
  let answer = 'INVALID INPUT';	
  let expression = separate(expr);
  console.log(expression);
  if (expression.firstNumber!=undefined && expression.secondNumber!=undefined && expression.operation){
  	switch (expression.operation){
  		case '+':
  			answer=sum(expression.firstNumber, expression.secondNumber);
  			break;
		case '-':
  			answer=substr(expression.firstNumber, expression.secondNumber);
  			break;
		case '*':
  			answer=mult(expression.firstNumber, expression.secondNumber);
  			break;
		case '/':
  			answer=div(expression.firstNumber, expression.secondNumber);
  			break;
  	}
  }
  return answer;
}

function separate(expr){
	let expression = expr, copy = expr;
	expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
	let numbers = copy.split(/[^0-9\.]+/);
	console.log(numbers);
	let operation = expression.split("#").filter(function(n){return n});
	let result = {};
	if (numbers[0])
		result.firstNumber=Number(numbers[0]);
	if (numbers[1])
		result.secondNumber=Number(numbers[1]);
	if (operation[0])
		result.operation=operation[0];
	return result;
}

function sum(a,b){
	return a+b;
}
function substr(a,b){
	return a-b;
}
function mult(a,b){
	return a*b;
}
function div(a,b){
	if (b==0)
		return 'err';
	return a/b;
}