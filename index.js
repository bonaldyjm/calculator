 const calculadora = new Calculadora ();

 
 function printOnScreen (num)  { 
   if (!calculadora.operator) {

   document.getElementsByClassName("val")[0].innerHTML += num;
   calculadora.setValorAnterior(num)
  }
   if (calculadora.operator)  { 
   calculadora.setValorActual(num)
    document.getElementsByClassName("val")[0].innerHTML += ' ';
    document.getElementsByClassName("val")[1].innerHTML += num;
  }
  
}


 
function deleteApp () {
  calculadora.reset()
  document.getElementsByClassName("val")[0].innerHTML = ""
  document.getElementsByClassName("val")[1].innerHTML = ""
  document.calculator.ans.value = "";


}

function printOnScreenOp (operator) {
  document.calculator.ans.value = operator;
  if(!calculadora.operator) {
    calculadora.operator = operator
  }

  }



function ProcessOp (operator) {
  if (operator === "+") calculadora.setOperator(operator);
   if (operator === "-") calculadora.setOperator(operator);
   if (operator === "*") calculadora.setOperator(operator);
   if (operator === "/") calculadora.setOperator(operator);
}

function botonIgual () {
if (calculadora.operator === "+") {
  document.calculator.ans.value = '='
  document.getElementsByClassName("val")[0].innerHTML= ''
  document.getElementsByClassName("val")[1].innerHTML = calculadora.suma(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "-") {
    document.getElementsByClassName("val")[0].innerHTML= ''
    document.getElementsByClassName("val")[1].innerHTML = calculadora.resta(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "*") {
  document.getElementsByClassName("val")[0].innerHTML= ''
  document.getElementsByClassName("val")[1].innerHTML = calculadora.multiplicacion(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "÷") {
  document.getElementsByClassName("val")[0].innerHTML= ''
  document.getElementsByClassName("val")[1].innerHTML = calculadora.division(calculadora.num1,calculadora.num2);
}
}