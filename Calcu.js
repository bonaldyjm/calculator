class Calculadora {
    num1;
    num2;
    operator;
    constructor(){
        this.num1 = "";
        this.num2 = "";
        this.operator = "";
    }
    setNum1 (num1) { 
        this.num1 += num1.toString();
    }
    setNum2 (num2) {
        this.num2 += num2.toString();
    }
    setOperator (operator) {
        this.operator = operator.toString();
    }
    
    
  
    suma (num1,num2) {
      if (num1.includes('.') || num2.includes('.')) {
        var num = parseFloat(num1)
        var otherNum = parseFloat(num2)
        return num + otherNum;
      }
          var num = parseInt(num1)
          var otherNum = parseInt(num2)
          return num + otherNum;
    }
    resta (num1,num2) {
      if (num1.includes('.') || num2.includes('.')) {
        var num = parseFloat(num1)
        var otherNum = parseFloat(num2)
        return num - otherNum;
      }
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num - otherNum;
    }
    
    division (num1,num2) {
      if (num1.includes('.') || num2.includes('.')) {
        var num = parseFloat(num1)
        var otherNum = parseFloat(num2)
        return num / otherNum;
      }
        var num = parseInt(num1)
        var otherNum = parseInt(num2)
        return num / otherNum;
    }
    multiplicacion (num1,num2) {
      if (num1.includes('.') || num2.includes('.')) {
        var num = parseFloat(num1)
        var otherNum = parseFloat(num2)
        return num * otherNum;
      }
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
  if (parseInt(document.getElementsByClassName("val")[0].innerHTML) > 999999999999999 
  || parseInt(document.getElementsByClassName("val")[1].innerHTML) > 999999999999999) {
    deleteApp();
    document.getElementsByClassName("val")[0].innerHTML = "Error";
}
  
  if (!calculadora.operator) {

   document.getElementsByClassName("val")[0].innerHTML += num;
   calculadora.setNum1(num)
  }
  if (calculadora.num1 && calculadora.operator ) {
    document.getElementsByClassName("val")[1].innerHTML = calculadora.num2
    document.getElementsByClassName("val")[1].innerHTML +=num;
    calculadora.setNum2(num);
  }
}


 
function deleteApp () {
  calculadora.reset()
  document.getElementsByClassName("val")[0].innerHTML = ""
  document.getElementsByClassName("val")[1].innerHTML = ""

}

function deleteCaracter() {
  if (document.getElementsByClassName("val")[0].innerHTML && !document.getElementsByClassName("val")[1].innerHTML) {
    document.getElementsByClassName("val")[0].innerHTML = document.getElementsByClassName("val")[0].innerHTML.slice(0,-1);
    calculadora.num1 = document.getElementsByClassName("val")[0].innerHTML;
  }
  else if (document.getElementsByClassName("val")[0].innerHTML && document.getElementsByClassName("val")[1].innerHTML){
    document.getElementsByClassName("val")[1].innerHTML = document.getElementsByClassName("val")[1].innerHTML.slice(0,-1);
    document.getElementsByClassName("val")[0].innerHTML = document.getElementsByClassName("val")[0].innerHTML
    calculadora.num2 = document.getElementsByClassName("val")[1].innerHTML 
  }
  }

function printOnScreenOp (operator) {
  document.getElementsByClassName("val")[0].innerHTML = calculadora.num1 + " " + operator;
  document.getElementsByClassName("val")[1].innerHTML = calculadora.num1;
   calculadora.setOperator(operator)
     }

     function accumulated (value) {
       if (value) {
         calculadora.num1 = value;
         calculadora.num2 = " ";
         printOnScreen(operator);
       }
     }

function botonIgual () {
if (calculadora.operator === "+") {
  document.getElementsByClassName("val")[0].innerHTML = calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.suma(calculadora.num1,calculadora.num2);
  accumulated (document.getElementsByClassName("val")[1].innerHTML)
}
else if (calculadora.operator === "-") {
    document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
    document.getElementsByClassName("val")[1].innerHTML = calculadora.resta(calculadora.num1,calculadora.num2);
    accumulated (document.getElementsByClassName("val")[1].innerHTML)
}
else if (calculadora.operator === "*") {
  document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.multiplicacion(calculadora.num1,calculadora.num2);
  accumulated (document.getElementsByClassName("val")[1].innerHTML)
}
else if (calculadora.operator === "÷") {
  if (calculadora.num2 ==="0") {
    "ERROR"
  } 
  document.getElementsByClassName("val")[0].innerHTML=  calculadora.num1 + " " + calculadora.operator + " " + calculadora.num2 + " =";
  document.getElementsByClassName("val")[1].innerHTML = calculadora.division(calculadora.num1,calculadora.num2);
  accumulated (document.getElementsByClassName("val")[1].innerHTML)
  
}
}