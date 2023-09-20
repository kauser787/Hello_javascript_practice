// -------------- Practices Problem 1-------------
let harryMomGiveTk = 1000;
let byeOrengeApple = 700;
let remainHarryTk = harryMomGiveTk - byeOrengeApple;
// console.log(remainHarryTk);


// -------------- Practices Problem 2-------------
let bangla = 75.25;
let english = 65;
let biology = 80;
let chemistry = 35.45;
let physics = 99.50;
let totalMark = (bangla + english + biology + chemistry + physics) / 5;
let avg =totalMark .toFixed(2);
// console.log(avg);


// -------------- Practices Problem 3 -------------
let jhonTeacher = "I am going to be";
let jhonTeacherSay ="an awesome web developer";
let teacherSay = jhonTeacher + " " + jhonTeacherSay;
// console.log(teacherSay);


// -------------- Practices Problem 4 -------------

let sara = 119;
let divided = 5;
let remainder = 119 % 5;
// console.log(remainder);

// -------------- Practices Problem 5 -------------

let fruits = ['apple','banana', 'orange'];
// problem 1 banana indexOf and replace with mango
let bananaPosition = fruits.indexOf('banana')
fruits[1]= "mango";
// problem 1.0 push nah pop
fruits.pop();
fruits.push("watermelon");
// console.log(fruits);

// -------------- Practices Problem 6 -------------
let fristNumber = 13;
let sceondNumber = 79;
let thirdNumber = 45;

if ( fristNumber > sceondNumber && fristNumber > thirdNumber){
    // console.log("taile frist number larger");

}
else if (sceondNumber > fristNumber && sceondNumber > thirdNumber) {
    // console.log('taile sceond Number is  the larger');
}
else {
    // console.log('taile third number is the larger');
}

// -------------- Practices Problem 5.5 -------------

let triangle1 = 9;
let triangle2 = 8;
let triangle3 = 9;

if ( triangle1 == triangle2 || triangle1 == triangle3){
    // console.log("two sides are equal");
}
else {
    // console.log("taile condition ekta sotti nah ");
}

// ------------ While loop ------------

let birthdayWish = 0;
while (birthdayWish < 6) {
     birthdayWish ++;
    // console.log("  Happy Birthday Kauser ");
}

// let numbers = 0;
// while (numbers < 10) {
//     numbers++;
//     console.log(numbers);
// }

// for (let i = 1; i < 10; i++){
//     console.log(i);
// }

// // odd number equation
// for (let i = 1; i < 10; i+=2){
//     console.log(i);
// }



// // even  number equation
// for (let i = 0; i < 10; i+=2){
//     console.log(i);
// }

//  Array addition  

// let sum = 0;
// let arrAddtion = [12,34,67,32,23,4,67,56];
// for (let i = 0; i < arrAddtion.length; i++){
//     console.log(sum1);
    
// // }

// let itemOfTable = ['pen','mouse','khata','fan', 'mobile'];
// for (let i = 0; i < itemOfTable.length; i++){
//     let items = itemOfTable[i]
//     console.log(items);
// // }

// for( let i = 0; i < 20; i++){
//     console.log(i);
//     if (i > 9) {
//         break;
//     }
// // }

// let roestGiven = 0;
// while (roestGiven < 9) {
//     roestGiven ++;
//     console.log('R a vai Roest dichen nah kno ', roestGiven);
//     if (roestGiven >5) {
//         break;
//     }
// }

// let num = 10;
// while (num > 1) {
//     console.log(num);
//     num--;
// }

// for (let i = 10; i > 1; i--){
//     console.log(i);
// }

// 19.5 module a  all question solve;
// 1. javascript is programming language;
// 2. javascript browser run time;
// 3. let vari = 34;
// 4. let userName = "Kauser ";
// 5. userName = "Kauser Ahmed";
// 6/7. total 8 type a variable declear kora jai: 
//    number: 1 primitive type
//    number: 2 non-primitive type
// primitive type data:
// # number;
// # string;
// # Boolean;
// # undefined;
// # null;

// non-primitive
// # Array;
// # Object
// # function;
// declear the variable name: camel case is the good practic
// oparetor hisabe kaj kore;
// +=: sum = sum + 1;
// -=: sum = sum - 1;
// ++: sum + sum;
//--: sum -sum
// parseInt: ai ta purno sonkha ber kore;
// parseFloat: ai ta diye vogno onso ber kore;
// toFixed diye: () 1st bracket koi ghor projontoh value dekhte cai tai bole dite hoi;
//let arry = [13,454,576,78];
// array length user kore array koyta element ache ber korte hoi;
//array 0 number index thke start hoi, position jon [] third bracket modhe bole dite hoi;
// let numberArray = [23,45,674,67,57];
// let num = numberArray.indexOf(45);
// // console.log(num);
//let fruitses = ['mango', 'apple', 'berry', 'banana', 'olive'];
//fruitses.push("fackfruit");
//fruitses.pop("coconat")
// fruitses[2] = 'coconat';
// let x = fruitses.indexOf('mango')
//console.log(fruitses);
// for (let i = 0; i < 39; i++){
//     console.log("ajke amr mon vlo nei");
// }

// let mon = 0;
// while (mon < 20) {
//     mon++
//     console.log("ajke amr mon vlo nai bcz amr thanda lagse");
// }
// Infinity loop colte thkbe;

// for (let i = 58; i < 98; i++){
//     console.log(i);
// // }
// let number = 56;
// while (number < 99) {
//     number++
//     console.log(number);
// // }
// for ( let i = 412; i<556; i+=2){
//     console.log(i);
// }

// let oddNumber = 551;
// while (oddNumber < 661) {
//     oddNumber+=2;
//     console.log(oddNumber);
// // }
// let helloJavascript = ["number", "string", "boolean", 'undifined', 'null', " object"," array"];
// for (let i = 0; i < helloJavascript.length; i++){
//     let js = helloJavascript[i];
//     console.log(js);
// // }
// let todayWork = ["module dekha"," practice kora","R paceh nah kno"];
// let t = 0;
// while (t < todayWork.length) {
//     t++;
//     let today = todayWork[t];
//     console.log(today);
// }

// for (let i = 30; i < 98; i++){
//     if (i == 40 ) {
//         break;
//     }
//     console.log(i);
// }

// let booksArray = [23,56,789,245,57,89,145,155,200];
// for (let i = 0; i < booksArray.length; i++){
//     let bookArrayPrice = booksArray[i];
//     if (bookArrayPrice >= 200){
//         continue;
//     }
//     console.log(bookArrayPrice);
// }

// const aToZ_Work = ["adda mara", "Amdr donake jaoya", "Sodai khoya"];
// for( let i = 0; i < aToZ_Work.length; i++){
//     const work = aToZ_Work[i]
//     console.log(work);
// }


// const allMobilePhone = ["Iphone", "Sumsong","Mi","Vivo","Oppo","Nokia","Google Pixel"];
// let arrMobile = 0;
// while (arrMobile < allMobilePhone.length) {
//     let mobile = allMobilePhone[arrMobile]
//     console.log(mobile);
//     arrMobile++;
// }
