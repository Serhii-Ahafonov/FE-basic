let startGame = confirm('Do you want to play a game?')
const min = 0,
    max = 8,
    max2 = 12;
const a = 200,
    b = 100,
    c = 50,
    d = 25;
const length = 3,
    lastCycle = 2;
  
function roullette (){
    if (startGame === false){
        alert('You did not become a billionaire, but can.');
    } else{
        let prizeArray = [];
        let fn1 = function smallGame(){
            let prizeRangeArray = [b,c,d];
            let winNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(winNumber);
            prizeArray.reduce((a, b) => a + b, 0);     
            for (let i = 0; i<length; i++){
                let prizeAmount = prizeArray.reduce((a, b) => a + b, 0);     
                let smallGamePrompt = [
                    'Choose a roullette pocket number from 0 to 8',
                    `Attempts left: ${length - i}`,
                    `Total prize: ${prizeAmount}`,
                    `Possible prize on current attempt: ${prizeRangeArray[i]}`];
                let guessAttempt = Number(prompt(smallGamePrompt.join('\n')));

                if (guessAttempt === winNumber) {
                    let oneWin = confirm(`Congratulation, you won! Your prize is: ${prizeRangeArray[i]} $. `
                    + `Do you want to continue?`);
                    prizeArray.push(prizeRangeArray[i]);
                    let prizeAmount = prizeArray.reduce((a, b) => a + b, 0);

                    if (oneWin === false){
                        alert(`Thank you for your participation. Your prize is: ${prizeAmount} $`);
                        let startGameAgain = confirm('Do you want to play a game again?')
                        
                        if (startGameAgain === false){
                        alert('You did not become a billionaire, but can.')
                        return
                        }else{
                            fn1();
                        }
                    }else{
                        let fn2 = function bigGame(){
                            let winNumber2 = Math.floor(Math.random() * (max2 - min + 1)) + min;
                            console.log(winNumber2);
                            let prizeRangeArray2 = [a,b,c];
                            let prizeAmount = prizeArray.reduce((a, b) => a + b, 0);
                            
                            for(let k=0; k<length; k++){
                                let bigGamePrompt = [
                                    'Choose a roullette pocket number from 0 to 12',
                                    `Attempts left: ${length - k}`,
                                    `Total prize: ${prizeAmount}`,
                                    `Possible prize on current attempt: ${prizeRangeArray2[k]}`];
                                let guessAttempt2 = Number(prompt(bigGamePrompt.join('\n')));
                                
                                if (guessAttempt2 === winNumber2) {
                                    let twoWin = confirm(`Congratulation, you won! Your prize is: ` +
                                    `${Number(prizeRangeArray2[k])} $. Do you want to continue?`);
                                    prizeArray.push(Number(prizeRangeArray2[k]));
                                    let prizeAmount = prizeArray.reduce((a, b) => a + b, 0); 
                                    
                                    if (twoWin === false){
                                        alert(`Thank you for your participation. Your prize is: ${prizeAmount} $`);
                                        let startGameAgain = confirm('Do you want to play a game again?')
                                        if (startGameAgain === false){
                                        alert('You did not become a billionaire, but can.');
                                        break
                                        }else{
                                            fn1();
                                        }
                                    }else{
                                        fn2();
                                    }
                                    break
                                }else{
                                    alert('nope, one more time...');
                                    
                                    if (Number([k])===lastCycle){
                                        alert(`Thank you for your participation. Your prize is: ` +
                                        `${prizeArray.reduce((a, b) => a + b, 0)} $`); 
                                        let startGameAgain = confirm('Do you want to play a game again?')
                                        if (startGameAgain === false){ 
                                        alert('You did not become a billionaire, but can.')
                                        }else{
                                            fn1();
                                        }  
                                    }
                                }
                            }
                        }
                        fn2();  
                    }
                    break
                }else{
                    alert('nope, one more time...');
                } 
            }
        }  
        fn1();
    }  
} 
roullette()