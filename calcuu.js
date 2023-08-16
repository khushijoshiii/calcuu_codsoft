let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText === 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }

        else if (buttonText === '⌫') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }


        else if (buttonText === '^') {
            if (screenValue.length > 0 && screenValue[screenValue.length - 1] !== '^') {
                buttonText = "**";
                screenValue += buttonText;
                screen.value = screenValue;
            }
        }

        else if (buttonText === "%") {
            screen.value = eval(screenValue) / 100;
            screenValue = screen.value;

        }

        else {

            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}