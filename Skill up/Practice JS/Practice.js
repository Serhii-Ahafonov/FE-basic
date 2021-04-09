// 1. Якщо змінна більше нуля і менше 5-ти, то виведіть 'Вірно', в іншому випадку виведіть 'Невірно'.

// function checkNumber(a){
//     if (a>0 && a<5 ){
//         alert("Вірно") 
//     } else {
//         alert("Не вірно")
//     }
// }

// 2. Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1', то в змінну result запишемо 'зима',/
//  якщо має значення '2' - 'весна' і так далі. Вирішіть задачу через switch-case.

// function checkSeason(val) {
//     let answer = ""
//     switch (val) {
//         case 1:
//             answer = "winter";
//             break;
//         case 2:
//             answer = "spring";
//             break;
//         case 3:
//             answer = "summer";
//             break;
//         case 4:
//             answer = "autumn";
//             break;
//         default:
//             answer = "galaxy";   
//     }   
//  return answer;
// }


// 3. Дана рядок 'aaa bbb ccc'. Вирізте з неї слово 'bbb' трьома різними способами (через substr, substring, slice).

// let str = "aaa bbb ccc"
// let a = str.substr(4,3);
// let b = str.substring(4,7);
// let c = str.slice(4,7);
// console.log(a,b,c);

// 4. Дана рядок 'I learn javascript!'. Знайдіть позицію підрядка 'learn' і довжину строки. Замінити javascript на html

// let str = "I learn javascript!";
// console.log(str.indexOf("learn"));
// console.log(str.length);
// let str1 = str.replace ("javascript","html");
// console.log (str1);

// 5. Перевірте, що рядок починається на http: //

// let str = "https://www.w3schools.com/jsref/jsref_startswith.asp"
// let q = str.startsWith("https://");
// console.log(q);

// 6. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою.

// function getDay(dayNumber)  {
//     let days = [ "Понеділок", "Вівторок" ,"Середа","Четвер","П'ятниця","Субота","Неділя"];
//     if (dayNumber > 7) {
//         dayNumber = dayNumber%7 ==0 ? 7: dayNumber%7;
//     }
//     return days [dayNumber - 1]
// }

// 7. За допомогою циклу for сформулюйте рядок '-1-2-3-4-5-6-7-8-9-' і запишіть її в змінну str

//  let str = "";
//     for (let i=1; i<=9;i++){
//         str +="-"+i;
//     }
//     console.log(str);
    
// 8. Виведіть 10 випадкових чисел за допомогою циклу

// let array = [];   
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
// }
// console.log(array);

// 9. Дано масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3.

// let array = ['a', 'b', 'c'];
// array.push (1,2,3);
// console.log(array)

// 10. Дано масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.

// let array = [1, 2, 3];
// array.unshift (4,5,6);
// console.log(array)

// 11. Дано масив ['js', 'css', 'jq']. Виведіть на екран останній елемент.

// let array = ['js', 'css', 'jq'];
// console.log(array[array.length-1]);

// 12. Дано масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть в новий елементи [1, 2, 3].

// let array = [1, 2, 3, 4, 5];
// console.log(array.slice(0,3));

// 13. Дано масив [1, 2, 3, 4, 5]. За допомогою методу splice запишіть в новий елементи [1, 2, 10, 11, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(2,2,10,11);
// console.log(array);

// 14. Заповніть масив таким чином: в перший елемент запишіть '1', в другій '22', в третій '333' і так далі.

// function newArrays (n){
//     let array =[];
//     for (let i = 1;i<=n;i++){
//         let num = "";
//         for (let y =1; y<=i; y++){
//             num+=i;
//         }
//         array.push(num)
//     }
//     return array;
// }

// 15. Зробіть функцію arrayFill, яка буде заповнювати масив заданими значеннями. Першим параметром функція приймає значення, 
// яким заповнювати масив, а другим - скільки елементів має бути в масиві. 
// Приклад: arrayFill ('x', 5) зробить масив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill (str, n){
//     let array =[];
//     for (let i = 1; i <= n; i++){
//         array.push(str)
//     }
//     return array;
// }

// 16. Дано масив з числами. Дізнайтеся скільки елементів з початку масиву треба скласти, щоб в сумі вийшло більше 10-ти.

// let array = [1, 2, 3, 4, 8, 6, 12, 10];

// function reducer (array){
//     array.reduce ((curEl, sum, index) => {
//         if (curEl <=  10){
//             console.log(index,curEl);
//             return sum + curEl;        
//         }
//     })
// }

// 17. Заповніть масив 10-ю випадковими числами від 1 до 10 за допомогою циклу

// let min = 1,
//     max = 10,
//     array = [];   
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(array);

// 18. Табличка множення в циклі

// let multiplyTable = '\n';
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         multiplyTable += (i*j) + ' ';
//     }
//     multiplyTable += '\n'
// }
// console.log(multiplyTable);

// 19. Дано масив з числами. Чи не використовуючи методу reverse переверніть його елементи в зворотному порядку.

// let arr = [1,2,3,4,5,33];
// function reverseArray(arr) {
//     let newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArray.push(arr[i]);
//     }
//     return newArray;
// }

// 20. Дано двовимірний масив з числами, наприклад [[1, 2, 3], [4, 5], [6]]. Знайдіть суму елементів цього масиву.

// let matrix = [
//     [1, 2, 3],
//     [4, 5],
//     [6]
// ];
// function sum (matrix){
//     let n =  (matrix.map(arr => arr.reduce((sum, item) => sum + item, 0))).reduce(function(acc, val) { return acc + val; }, 0);
//     console.log(n);
// }


// 21. Зробіть функцію getDigitsSum (digit - це цифра), яка параметром приймає ціле число і повертає суму його цифр.

// function getDigitsSum(digit) {
//     let sum = 0;
//     let str = String(digit);
//     for(let i = 0; i < str.length; i++) sum += Number(str[i]);
//     return sum;
// }


// 22. Дано масив з числами. Створіть з нього новий масив, де залишаться лежати тільки позитивні числа. 
// Створіть для цього допоміжну функцію isPositive (), яка параметром буде приймати число і повертати true, якщо число позитивне, 
// і false - якщо негативне.

// let array = [1,3,-5,0,77,4,-3,-2,32,0,4,-5,66,-66,74];
// let array1 = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0){
//         array1.push(array[i]);
//     }
// }
// function isPositive(n) {
//     let result;
//     if (n >= 0) {
//         result = true;
//     } else if (n < 0) {
//         result = false;
//     }
//     console.log(result);
//     console.log(array1);
// }

// 23. За допомогою циклу вивести всі трицифрові числа в яких сума всіх цифр дорівнює - 9. Наприклад: 2+4+3=9

// function three_digit_sum_9() {
//  for (let i = 1; i < 10; ++i) {
//    for (let j = 0; j < 10; ++j) {
//         for (let k = 0; k < 10; ++k){
//           let sum = (i) +(j) + (k);
//           if (sum === 9) { 
//              let array = [i,j,k];
//              console.log(array.join(""));
//             }
//          }
//        }
//     }
//   }
// three_digit_sum_9();

//  24. За допомогою циклу вивести користувачів як є онлайн

// let usersData = {  
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: false
//   },
//   Sarah: {
//     online: true
//   }
// }
// function userStatus () {
//     for (i in usersData) {
//         let myUsers = usersData[i];
//         for (y in myUsers){
//             let status = myUsers[y];
//             if ( status === true){
//                 console.log (i);
//             }
//         }
//     }
// }
// userStatus();