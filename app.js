// function checkArray(){
//     let target = prompt("Enter a number. I will return the indices of two numbers in my array that add up to that number.")
//     let array = [5,17,77,50];
//     let answerArray = array.filter(function(el){
//         for(let i = 0; i<array.length; i++)
//             if(el + array[i] == target) return true;
//         })
//     let resultOne = array.indexOf(answerArray[0]);
//     let resultTwo = array.indexOf(answerArray[1]);
//     let result = `${resultOne} and ${resultTwo}`;
//     return result;
//     }

// let problemOne = checkArray();
// console.log(problemOne)


// function checkPalindrome(){
//     inputWord = prompt("Please enter a word you think may be a palindrome")
//     let returnWord = ""
//     for(let i = 1; i < inputWord.length+1; i++){
//         returnWord = returnWord.concat(inputWord[inputWord.length-i]);
//     }
//     if(inputWord == returnWord) console.log("You were right! Its a palindrome!");
//     else console.log("You were wrong :(. It isn't a palindrome")
// }

// let run = checkPalindrome()

// function checkIncrement(){
//     let array = [10, 12, 14, 6, 8];
//     let findMin = array.filter(function(el){
//         let counter = 0;
//         for(let i = 0; i<array.length; i++){
//             if(el<array[i]) counter++;
//             if(counter == array.length-1) return el;
//         }})
//     let findMax = array.filter(function(el){
//         let counter = 0;
//         for(let i = 0; i<array.length; i++){
//             if(el>array[i]) counter++;
//             if(counter == array.length-1) return el;
//         }})
//     let increment = (findMax - findMin) / (array.length-1);
//     let trueCounter =0;
//     let checkAnswer = Number(findMin) + increment;
//     for(let i = 1; i<array.length; i++){
//         if(array.includes(checkAnswer)) {trueCounter++;}
//         checkAnswer = checkAnswer + increment;
//     }
//     if (trueCounter == array.length-1) return console.log("true");
//     else return console.log("false");
// }

// let problemThree = checkIncrement();

// function retPosNeg(){
//     let counter = 0;
//     let array = []
//     while(counter == 0){
//         let input = prompt("Please enter a number or enter 'confirm' when finished entering numbers");
//         if(input != 'confirm') array.push(Number(input));
//         else counter = 1;
//     }
//     console.log(array);
//     let posArray = array.filter(function(el){
//         if(el>0) return true;
//     });
//     let negArray = array.filter(function(el){
//         if(el<0) return true;
//     });
//     let posResult = posArray.reduce(function(total, el){
//         return total + el;
//     });
//     let negResult = negArray.reduce(function(total, el){
//         return total + el;
//     });
//     return `${posResult}, ${negResult}`;
// }

// let problemFour = retPosNeg();
// console.log(problemFour);

// function checkHighLow(){
//     let input = prompt("Please enter a bunch of numbers separated by spaces and I will find the highest and lowest numbers");
//     let numArray = [];
//     let currentNum = "";
//     for(let i = 0; i<input.length+1; i++){
//         if(input[i] == " " || i == input.length) {
//             numArray.push(Number(currentNum));
//             currentNum = "";
//         }
//         else currentNum = currentNum + input[i];
//     }
//     let findMin = numArray.filter(function(el){
//         let counter = 0;
//         for(let i = 0; i<numArray.length; i++){
//             if(el<numArray[i]) counter++;
//             if(counter == numArray.length-1) return true;
//         }})
//     let findMax = numArray.filter(function(el){
//         let counter = 0;
//         for(let i = 0; i<numArray.length; i++){
//             if(el>numArray[i]) counter++;
//             if(counter == numArray.length-1) return true;
//         }})
//     return `${findMin} and ${findMax}`
//     }

// let problemFive = checkHighLow();
// console.log(problemFive);

// function promptFor(question, valid){
//     do {
//         var response = prompt(question).trim();
//     } while (!valid(response));
//     return response;
// }

// function charEmail(input){
//     let counter = 0;
//     for(let i=0; i<input.length; i++){
//         if(input[i] == "@") counter ++;
//     }
//     if(input.slice(-4,-1) == ".co" && input[input.length-1] == "m") counter ++;
//     if(counter == 2) return true;
//     else alert("This is not a valid email")
// }

// function checkEmail(){
//     let validatedEmail = promptFor("Please input an email address", charEmail);
//     return `${validatedEmail} is an email!`;
// }
// let problemSix = checkEmail();
// console.log(problemSix);

function letterToNumber(){
    let alphabet = " abcdefghijklmnopqrstuvwxyz";
    let newString = "";
    let input = prompt("Please enter a string of letters and I will replace those letters with their placement in the alphabet")
    newString += `${alphabet.indexOf(input[0])}`
    for( let i = 1; i<input.length; i++)(
        newString += ` ${alphabet.indexOf(input[i])}`
    )
    return newString
}

let problemSeven = letterToNumber();
console.log(problemSeven)