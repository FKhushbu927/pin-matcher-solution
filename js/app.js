function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
           return pin;
    }
    else{
        // console.log('pin is not 4 digit found', pin);
        return getPin();
    }
}



function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pinNumber = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pinNumber;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){

       if(number === 'C'){
        typedNumberField.value = '';
       }
       else if(number === '<'){
          const digits =  previousTypedNumber.split('');
          digits.pop();
          const remainingDigit = digits.join('');
          typedNumberField.value = remainingDigit;
       }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})


