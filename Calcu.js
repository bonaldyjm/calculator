class Calculadora {
    num1;
    num2;
    operator;
    constructor(){
        this.num1 = "";
        this.num2 = "";
        this.operator = "";
    }
    setValorAnterior (num1) {
        this.num1 += num1.toString();
    }
    setValorActual (num2) {
        this.num2 += num2.toString();
    }
    setOperator (operator) {
        this.operator = operator.toString();
    }
    
    
  
    suma (num1,num2) {
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num + otherNum;
    }
    resta (num1,num2) {
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num - otherNum;
    }
    division (num1,num2) {
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num / otherNum;
    }
    multiplicacion (num1,num2) {
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num * otherNum;
    }
    reset () {
        this.num1="";
        this.num2="";
        this.operator=""
    }
}
const calculadora = new Calculadora ();

 
 function printOnScreen (num)  { 
   if (!calculadora.operator) {

   document.getElementsByClassName("val")[0].innerHTML += num;
   calculadora.setValorAnterior(num)
  }
  if (calculadora.operator) {
    document.getElementsByClassName("val")[1].innerHTML = " "
    calculadora.setValorActual(num);
    document.getElementsByClassName("val")[1].innerHTML += num;
  }
 }


 
function deleteApp () {
  calculadora.reset()
  document.getElementsByClassName("val")[0].innerHTML = ""
  document.getElementsByClassName("val")[1].innerHTML = ""

}

function printOnScreenOp (operator) {
  document.getElementsByClassName("val")[0].innerHTML = calculadora.num1 + " " + operator;
  document.getElementsByClassName("val")[1].innerHTML = calculadora.num1;
   calculadora.setOperator(operator)
     }


function botonIgual () {
if (calculadora.operator === "+") {
  document.getElementsByClassName("val")[0].innerHTML = calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.suma(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "-") {
    document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
    document.getElementsByClassName("val")[1].innerHTML = calculadora.resta(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "*") {
  document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.multiplicacion(calculadora.num1,calculadora.num2);
}
else if (calculadora.operator === "÷") {
  document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.division(calculadora.num1,calculadora.num2);
}
}