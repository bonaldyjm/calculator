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

    const car= new Calculator();

    function printValuesToScreen(value) {
      

           if(car.operation && car.num1 && car.num2){
            resetCalculator();
           }

            if(car.operation){
                document.calculator.ans.value+=value;
                car.setNum2(value);
            }else{
                document.calculator.ans.value+=value
                car.setNum1(value);
            }
            updateHistorial();
    }

    function setOperation(operator) {
        switch (operator) {
            case '*':
                car.setOperation(operator);
                break;
            case '+':
                car.setOperation(operator);
                break;    
            case '-':
                car.setOperation(operator);
                break; 
            case '/':
                car.setOperation(operator);
                break; 
            default:
                break;
        }
        updateHistorial();
        clearScreen();
        
    }

    function doOperation() {
        document.calculator.ans.value=  car.resultOperation();
        updateHistorial();
    }

    function clearScreen() {
        document.calculator.ans.value="";

        
    }

    function resetCalculator() {
        car.reset();
        clearScreen();
        updateHistorial(true)
        
        
    }

    function  updateHistorial( clear){
        if(clear){
            document.getElementById("historial").textContent='';  
        }else{
            document.getElementById("historial").textContent=car.print();
        }
    
    }

  
