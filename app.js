const resultOutput = document.querySelector('.result-output');
const buttons = document.querySelectorAll('button');
let output = "";

for (let button of buttons) {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
}

function calculate(value) {
    switch (value) {
        case "DEL":
            if (output === "ERROR") {
                output = "";
                break;
            }
            output = resultOutput.innerText.slice(0, resultOutput.innerText.length - 1);
            break;

        case "RESET":
            output = "";
            break;

        case "=":
            if (output !== "") {
                try {
                    /*Alternativa a usar la función eval() */
                    const evaluate = function (string) {
                        return new Function('return ' + string)();
                    }
                    output = evaluate(output);
                } catch (e) {
                    output = "ERROR";
                };

                /*Dividir sobre cero arroja error */
                output == 'Infinity' || output == '-Infinity' || Number.isNaN(output) ? output = "ERROR" : '';
            }
            break;

        /*Default servirá para las teclas numéricas y operadores aritméticos */
        default:

            //Si dio error, la próxima tecla que presione resetea el valor de output
            if (output == "ERROR") { output = "" };

            //Impide que se escriban dos caracteres consecutivos de '/' y '*'
            if (value == '/' && resultOutput.innerText.endsWith('/')) { return }
            if (value == '*' && resultOutput.innerText.endsWith('*')) { return }

            output += value;
            break;
    }

    resultOutput.innerText = output;
}




