/* START TASK 1: Your code goes here */
let tbl = document.querySelector('.table')
let tr = document.querySelectorAll('tr');
let td = document.querySelectorAll('td'); 
for (let i=0; i< td.length; i++) {
    if (i===0||i===3||i===6){ 
        td[i].addEventListener('click', function() {
            td[i].closest('tr').classList.toggle('bgblue'); 
        }, false);
        
    } else if (i===5) {
        td[i].addEventListener('click', function() { 
            tbl.classList.toggle('bggreen'); 
        }, false); 
    } else {
        td[i].addEventListener('click', function() { 
            this.classList.toggle('bgyellow'); 
        }, false); 
    }
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const div = document.getElementById('alert');
const btn = document.querySelector('.btn');
const inputPhone = document.getElementById('phone');
const invalidPrg = document.getElementById('invalid');
const validPrg = document.getElementById('valid');
const regx = /^[+][3][8][0]\d{9}$/im ;

function isValidPhone (){
    let text = inputPhone.value;
    if(regx.test(text)===false){
        inputPhone.setAttribute('onkeyup','myFunction()');
        div.classList = 'invalid';
        validPrg.classList = 'non'
        invalidPrg.classList = '';
        inputPhone.classList = 'invalidPhoneInput';
        inputPhone.value = '';
        btn.disabled = true;
    } else { 
        invalidPrg.classList = 'non'
        validPrg.classList = ''
        div.classList = 'valid'
        inputPhone.value = '';
        btn.disabled = false;
    }
}
function myFunction(){
    let text = inputPhone.value;
    if(regx.test(text)===true){
        invalidPrg.classList = 'non'
        inputPhone.classList = '';
        div.classList = '';
        btn.disabled = false;
    }else{
        invalidPrg.classList = ''
        inputPhone.classList = 'invalidPhoneInput';
        div.classList = 'invalid';
        btn.disabled = true;
    }
}
/* END TASK 2 */

/* START TASK 3: Your code goes here */
let theSquareObject = document.getElementById('basketBall');
let theField = document.getElementById('basketCourt');
theField.addEventListener('click', getClickPosition, false);
let counterA = 1;
let counterB = 1;

function getClickPosition(e) {
    function getPosition (el){
        let x1Postiton = 0;
        let y1Position = 0;
        while (el) {
            x1Postiton += el.offsetLeft - el.scrollLeft + el.clientLeft;
            y1Position += el.offsetTop - el.scrollTop + el.clientTop;
            el = el.offsetParent;
        }
        return{
            x: x1Postiton,
            y: y1Position
        }
    }
    let parentPosition = getPosition(theField);
    let xPosition = e.clientX -parentPosition.x - theSquareObject.offsetWidth/2;
    let yPostion = e.clientY -parentPosition.y - theSquareObject.offsetHeight/2;
    let translate3dValue = 'translate3d(' + xPosition + 'px,' + yPostion + 'px,0)';
    theSquareObject.style.transform = translate3dValue;

    let scoreA = document.getElementById('scoreA');
    let scoreB = document.getElementById('scoreB');
        if (document.getElementById('baskRight').contains(e.target)){
        document.querySelector('.teamA').innerHTML = `Team A:${counterA++}`;
        scoreB.classList = 'non'
        scoreA.classList = 'red'
        setTimeout(function(){
        document.getElementById('scoreA').classList = 'non' 
        },3000)
    } else if (document.getElementById('baskLeft').contains(e.target)){
        document.querySelector('.teamB').innerHTML = `Team B:${counterB++}`;
        scoreA.classList = 'non'
        scoreB.classList = 'red'
        setTimeout(function(){
        document.getElementById('scoreB').classList = 'non' 
        },3000)
    }
}
/* END TASK 3 */