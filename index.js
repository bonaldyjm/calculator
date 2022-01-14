
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

  
