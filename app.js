const resultOutput = document.querySelector('.result-output');
const buttons = document.querySelectorAll('button');
let output = "";

function calculate(value) {
    switch (value) {
        case "DEL" :
            output = resultOutput.innerText.slice(0, resultOutput.innerText.length-1);
            resultOutput.innerText= output;
            break;
        
        case "RESET" :
            output= "";
            resultOutput.innerText = output;
            break;

        case "=" :
            if(output !== ""){
                try {
                    output = eval(output);
                    resultOutput.innerText = output;
                }
                catch(e){
                    console.log("ERROR");
                    // resultOutput.innerText = "ERROR";  
                };
            }   
            break;

        /*Sirve para las teclas numéricas y operadores aritméticos */
        default:
            output += value;
            resultOutput.innerText += value;
    }
}

for(let button of buttons) {
    button.addEventListener('click', (e)=> calculate(e.target.dataset.value));
}


