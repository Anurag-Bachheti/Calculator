function press(num) {
    document.getElementById('screen').value += num;
}

function clearScreen(){
    document.getElementById('screen').value = ""
}

function calculate() {
    let result = eval(document.getElementById('screen').value)
    document.getElementById('screen').value = result
}


function press(num) {
 const screen = document.getElementById('screen');
 const currentValue = screen.value;

const operators = ['+', '-', '*', '/','.'];
if (operators.includes(num) && operators.includes(currentValue.slice(-1))){
return;}

screen.value +=num;
}



















