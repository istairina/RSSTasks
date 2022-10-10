const inputText = document.querySelector('.input-amount');
const amountNumbers = document.querySelectorAll('input[name="choose-amount"]');


function putNumberInInputText() {
    for (const i of amountNumbers) {
        if (i.checked) {
            inputText.value = i.value;
        }
    }
}

function selectNumber() {
   
    for (const i of amountNumbers) {
        if (i.checked) {
            i.checked = false;
            break;
        }
    }

    for (const p of amountNumbers) {
        if (inputText.value == p.value) {
            p.checked = true;
            break;
        }
    }
}


