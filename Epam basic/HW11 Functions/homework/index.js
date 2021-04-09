function isEquals (a,b) {
    console.log(a===b);
}

function isBigger(a,b) {
    console.log(a>b);
}

function storeNames() {
    let array=[];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
      }
    console.log(array);
}

function getDifference (a,b){
     if (b<0){
        b=-b;
    }
    if (a<0){
        a=-a;
    }
    if (b>a){
        console.log(b - a);
    } else{
        console.log(a - b); 
    }
}

function negativeCount(arr){
    let negativeNumber = 0;
    arr.forEach((item) => {
        if (item < 0) {
            negativeNumber++
        }
    });
    console.log(negativeNumber);
}

function letterCount(str1,str2){
    let letterNumber = 0;
    for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i).toLowerCase() === str2.toLowerCase()){
      letterNumber += 1;
    }
  }
  console.log(letterNumber);
}

function countPoints(array) {
    let countNumber = 0;
    const win = 3;
    const duce = 1;
    const strSplit = 2;
    for (let i = 0; i < array.length; i++ ){
        let newarray = array[i].split(':',strSplit);
        let x = Number(newarray[0]);
        let y = Number(newarray[1]);
        if(x > y){
            countNumber += win;
        } else if (x === y){
            countNumber += duce;
        } 
    }
    console.log(countNumber);
}



