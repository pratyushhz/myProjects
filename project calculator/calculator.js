console.log("Creating a calculator using javaScript");

let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
// using for-of loop:
for(item of buttons) {
    item.addEventListener('click', (e) => {
        // it will give the inner text of the button:
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText =='X') {
            buttonText = '*';
            // display button value on screen:
            screenValue += buttonText;
            screen.value = screenValue;
        } else if(buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if(buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}








