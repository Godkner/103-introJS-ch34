let total=0;
function operations(){
    let operation= prompt ("Enter the operation addition,substraction,multiplication,division");
    let number1= Number (prompt ("Enter number 1"));
    let number2 = Number(prompt ("Enter number 2"));

    switch(operation){
        case "+":
            total= number1+number2;
            console.log(total); 
            break;
        case "-":
            total= number1-number2;
            console.log(total); 
            break;
        case "*":
            total= number1*number2;
            console.log(total);
            break;
        case "/":
            total= number1/number2;
            console.log(total);
            break;

    }

    document.getElementById("results").innerHTML=
                `
     <h2> RESULT </h2>
    <p> ${total}</p>
    ` 
            
        }
    
    
