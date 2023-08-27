// function sleep (){
//     console.log("I am sleeping Now");
// }
// sleep(); 

// self invoking function 

// (function (){
//     console.log(" self invoking function");
// })()


// ai ta hocche function call() 
const person = {
    fullName : function(){
        return this.firstName + " " +this.lastName 
    } 
};

const person1 = {
    firstName: "Kauser",
    lastName: "Ahmed"
};

const person2 = {
    firstName: "john",
    lastName: " deo"
};

 const person3 = person.fullName.call(person1);
 console.log(person3);
