class Calculator {
  
    num1;
    num2;
    operation;
  
    constructor(){
        this.num1='';
        this.num2='';
        this.operation="";

    }
  
    setNum1(num1){
        debugger
       // todo aki va la logica para setar el primer operando
       this.num1 += num1.toString();
       
    }
  
    setNum2(num2){
        // todo aki va la logica para setar el segundo operando}
        this.num2 += num2.toString();
    }
  
    setOperation(operation){
         // todo aki va la logica para setar la operacion
         this.operation = operation;
         
    }

  resultOperation(){
      // do operation  
    
     return eval(this.num1 + this.operation + this.num2) ;
  }
  
    print(){
       // todo aki va la logica para mostrar las operaciones y el resultado
       var result =this.num1 +' '+ this.operation + ' '+ this.num2;
       return this.num2 ? result + ' =': result
    }

    reset(){
        this.operation='';
        this.num1='';
        this.num2='';

    }
  }