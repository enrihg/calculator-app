const resultOutput = document.querySelector('.result-output');
const buttons = document.querySelectorAll('button');
let output = "";

function calculate(value) {
    switch (value) {
        case "DEL":
            if (output === "ERROR") {
                output = "";
                console.log(`output is: ${output}`);
                break;
            }
            output = resultOutput.innerText.slice(0, resultOutput.innerText.length - 1);
            console.log(`output is: ${output}`);
            break;

        case "RESET":
            output = "";
            console.log(`output is: ${output}`);
            break;

        case "=":
            if (output !== "") {
                try {
                    const evaluate = function (string) {
                        return new Function('return ' + string)();
                    }
                    output = evaluate(output);
                    console.log(`output is: ${output}`);

                    /*Si divido sobre cero arrojo error */
                    if (output == 'Infinity') { output = "ERROR" };

                    /*Escapo los caracteres '//' */ 
                    // if(output.includes('//')) {output= "ERROR"};
                }
                catch (e) {
                    output = "ERROR";
                    console.log(`output is: ${output}`);
                };
            }
            break;

        /*Default servirá para las teclas numéricas y operadores aritméticos */
        default:
            if (output == "ERROR") { output = "" };
            output += value;
            console.log(`output is: ${output}`);
            break;
    }

    resultOutput.innerText = output;
}

for (let button of buttons) {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
}


