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