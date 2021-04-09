let startApp = prompt('Event name?', 'meeting');
function validateForm(){
    let valid = true;
    let userName = document.contact_form.contact_name.value;
    let userPlace = document.contact_form.contact_place.value;
    let userTime =document.contact_form.contact_time.value;

    if ( userName === '' || 
    userPlace === '' ||
    userTime === '') {
        alert( 'Input all data' );
        valid = false;
    } else {
        let timeNumber = document.getElementById('time').value;
        let timeRGEX = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;
        let timeResult = timeRGEX.test(timeNumber);
        if(timeResult === false){
            alert('Enter time in format hh:mm')
        }else{
            console.log(`${userName} has a ${startApp} today at ${userTime} somewhere in ${userPlace}`);
        }   
    }  
    return valid
}
function converter () {
    let userInputEuro = prompt('Amount of Euro?', '0');
    let userInputUsd = prompt('Amount of Dollar?', '0');
    const roundNum = 2;
    if (userInputEuro > 0 && userInputUsd > 0){
        let currencyRates = {
          'hrns': 1,
          'EUR': 33.52,
          'USD': 27.76
        };
        let usdAmount = Number(userInputUsd*currencyRates['USD']).toFixed(roundNum);
        let eurAmount = Number(userInputEuro*currencyRates['EUR']).toFixed(roundNum);
        alert(`${userInputEuro} euros are equal ${eurAmount}hrns, ${userInputUsd} dollars are equal ${usdAmount}hrns`)
    } else{
        alert('Please, enter correct number')
    }
}