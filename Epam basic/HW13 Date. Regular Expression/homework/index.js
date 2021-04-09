function getAge(birthDate){
    let today = new Date().setMonth(9 ,22);
    let diff_ms = today - birthDate.getTime();
    let age_dt = new Date(diff_ms); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

function getWeekDay(testDate){
    let generalDate = new Date(testDate);
    let weekday = generalDate.toLocaleString('default', { weekday: 'long' });
    return weekday;
}

function getAmountDaysToNewYear() {
    let today = new Date(new Date().setMonth(0,1));
    let nwYr=new Date(today.getFullYear()+1, 0, 1);
    const one_day=86400000; 
    return Math.ceil((nwYr.getTime()-today.getTime())/one_day); 
}

function getProgrammersDay(yrDt){
    const one_day=86400000; 
    let programDt = new Date(new Date().setFullYear(yrDt,0,1)+one_day*255);
    let monthDt = programDt.toLocaleString('default', { month: 'short' });
    return `${programDt.getDate()} ${monthDt}, ${yrDt} (${getWeekDay(programDt)}) `; 
}

function howFarIs (specifiedWeekday) {
    specifiedWeekday = specifiedWeekday[0].toUpperCase() + specifiedWeekday.slice(1).toLowerCase();
    let weekDay = getWeekDay(new Date());
    const one_day=86400000;
    if (weekDay===specifiedWeekday){ 
        return `Hey, today is ${ specifiedWeekday } =)`
    }else {
        let date1 = new Date();
        let date2 = new Date(new Date().setDate(date1.getDate()+7));
        for(let i = new Date(); i<date2; i.setDate(i.getDate()+1)){ 
            let weekDay1 = getWeekDay(new Date(i)); 
            if (specifiedWeekday.slice(0,2)=== weekDay1.slice(0,2)){
                let number = Math.ceil((i.getTime()-date1.getTime())/one_day)
                return `It's ${number} day(s) left till ${ specifiedWeekday }`
                
            }
        }
    }
}

function isValidIdentifier (str){
    let strRGEX = /^[A-Za-z$_@][A-Za-z0-9$_@]+$/;
     return strRGEX.test(str);
}

function capitalize (str){
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
}

function isValidAudioFile(str){
    let strRGEX = /^[a-zA-Z]+[.mp3|.flac|.alac|.aac]+$/;
     return strRGEX.test(str);
} 

function getHexadecimalColors(str){
    let strRGEX = /#(\b[A-Fa-f0-9]{6}\b|\b[A-Fa-f0-9]{3}\b)/g;
    let arr = str.match(strRGEX); 
    if (arr===null){
        return [];
    } else {
        return str.match(strRGEX)
    }
}

function isValidPassword(str) {
    let strRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 
     if (/([A-Z])/.test(str) === false) {
        return `${strRGEX.test(str)} (no uppercase letter)`;
     } else if (/([a-z])/.test(str) === false) {
        return `${strRGEX.test(str)} (no lowercase letter)`;
     } else if (/(\d)/.test(str) === false) {
        return `${strRGEX.test(str)} (no numbers)`;
     } else if (/[a-zA-Z\d]{8,}/.test(str) === false) {
        return `${strRGEX.test(str)} (too short)`;
     } else {
        return strRGEX.test(str);
     }
}

function addThousandsSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText(text) {
    let strRGEX = /(https?:\/\/[^\s]+)/g;
    try{
        let arr = text.match(strRGEX); 
        if (arr===null){
            return [];
        } else {
            return text.match(strRGEX);
        }
    } catch (e){
        return 'error';
    }  
}