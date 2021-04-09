function reverseNumber(num) {
    let digit, result = 0
    while( num ){
        digit = num % 10 ; 
        result = result * 10 + digit ; 
        num = num/10|0 ; 
    }
    return num
}

function forEach(arr, func) {
    for (let value of arr) {
          func(value);
    }
}

function map(arr, func) {
    let newArray = [] 
    for (let value of arr) {
        newArray.push(func(value));
    }
}

function filter(arr, func) {
    let newArray = [] 
    for (let value of arr) {
        if (func(value) === true){
            newArray.push(value)
        }
    }
}
  
function getAdultAppleLovers(data) {
    let newArray = []
    for (let value of data) {
        if (value.favoriteFruit === 'apple' && value.age > 18){
            newArray.push(value.name); 
        }
   }
    return newArray;
}

function getKeys(obj) {
    let newArray = []
    for(let propt in obj){
        if (obj.hasOwnProperty){
            newArray.push(propt) 
        }   
    }
    return newArray; 
}

function getValues(obj) {
    let newArray = []
    for(let propt in obj){
        if (obj.hasOwnProperty){
            newArray.push(obj[propt]) 
        }   
    }
    return newArray;
}

function showFormattedDate(dateObj) {
    const mainDate = dateObj.toString();
    let mainMonth = mainDate.slice(4,7);
    let mainYear = mainDate.slice(11,15);
    let mainDay = mainDate.slice(8,10);
    return `It is ${mainDay} of ${mainMonth}, ${mainYear}`;
}

