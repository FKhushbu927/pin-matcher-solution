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


