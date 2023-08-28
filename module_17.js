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
    console.log("two sides are equal");
}
else {
    console.log("taile condition ekta sotti nah ");
}