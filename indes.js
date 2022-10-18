 
 let firstVal = null;
 let secondVal = null;
 let operator = null;
 let bool = false;
 
 const zero = document.querySelector(".zero");
 const one = document.querySelector(".one");
 const two = document.querySelector(".two");
 const three = document.querySelector(".three");
 const four = document.querySelector(".four");
 const five = document.querySelector(".five");
 const six = document.querySelector(".six");
 const seven = document.querySelector(".seven");
 const eight = document.querySelector(".eight");
 const nine = document.querySelector(".nine");

 const add = document.querySelector(".add");
 const subtract = document.querySelector(".subtract");
 const multiply = document.querySelector(".multiply");
 const divide = document.querySelector(".divide");
 const equalTo = document.querySelector(".equalTo");

 const output = document.querySelector(".output");
 

 function addVal(num1, num2){
    console.log("in addVal function")
    console.log(num1 + num2)
    return parseInt(num1) + parseInt(num2);
 }

  function subtractVal(num1, num2) {
    return num1 - num2;
  };

  function multiplyVal(num1, num2) {

    return num1 * num2;
  
  };

  function divideVal(num1, num2){
    return num1 / num2;
  }

  function displayOutput(value){
    console.log("in displayOutput function")
    console.log(value)
    output.textContent = value;
  }

  zero.addEventListener("click", ()=>{

    if(firstVal != null && operator != null){
        if(bool){
            output.textContent = "0";
            bool = false;
        }
    }
    
    if(output.textContent != "0"){
        output.textContent += "0";
    }
  });

  function displayValue(num){

    if(firstVal != null && operator != null){
        if(bool){
            output.textContent = "";
            bool = false;
        }
        
    }

    if(output.textContent == "0"){
        switch(num){

            case "one": 
                output.textContent = "1";
            break;

            case "two": 
                output.textContent = "2";
            break;

            case "three": 
                output.textContent = "3";
            break;

            case "four": 
                output.textContent = "4";
            break;

            case "five": 
                output.textContent = "5";
            break;

            case "six": 
                output.textContent = "6";
            break;

            case "seven": 
                output.textContent = "7";
            break;

            case "eight": 
                output.textContent = "8";
            break;

            case "nine": 
                output.textContent = "9";
            break;
        }
    }
    else{

        switch(num){

            case "one": 
                output.textContent += "1";
            break;

            case "two": 
                output.textContent += "2";
            break;

            case "three": 
                output.textContent += "3";
            break;

            case "four": 
                output.textContent += "4";
            break;

            case "five": 
                output.textContent += "5";
            break;

            case "six": 
                output.textContent += "6";
            break;

            case "seven": 
                output.textContent += "7";
            break;

            case "eight": 
                output.textContent += "8";
            break;

            case "nine": 
                output.textContent += "9";
            break;
        }
    }

  }

  one.addEventListener("click", ()=>{ displayValue("one") });
  two.addEventListener("click", ()=>{ displayValue("two") });
  three.addEventListener("click", ()=>{ displayValue("three") });
  four.addEventListener("click", ()=>{ displayValue("four") });
  five.addEventListener("click", ()=>{ displayValue("five") });
  six.addEventListener("click", ()=>{ displayValue("six") });
  seven.addEventListener("click", ()=>{ displayValue("seven") });
  eight.addEventListener("click", ()=>{ displayValue("eight") });
  nine.addEventListener("click", ()=>{ displayValue("nine") });

  


  add.addEventListener("click", ()=>{
    firstVal = output.textContent;
    operator = "+";
    bool = true;
  });
  
  subtract.addEventListener("click", ()=>{
    firstVal = output.textContent;
    operator = "-";
    bool = true;
  });

  multiply.addEventListener("click", ()=>{
    firstVal = output.textContent;
    operator = "*";
    bool = true;
  });

  divide.addEventListener("click", ()=>{
    firstVal = output.textContent;
    operator = "/";
    bool = true;
  });

  equalTo.addEventListener("click", ()=>{

    secondVal = output.textContent;
    let ans = null;

    switch(operator){

        case "+":
            ans = addVal(firstVal, secondVal);
            displayOutput(ans);
            break;

        case "-":
            ans = subtractVal(firstVal, secondVal);
            displayOutput(ans);
            break;

        case "*":
            ans = multiplyVal(firstVal, secondVal);
            displayOutput(ans);
            break;

        case "/":
            ans = divideVal(firstVal, secondVal);
            displayOutput(ans);
            break;
    }

    firstVal = ans;
    secondVal = null;

    bool = true;
  });

