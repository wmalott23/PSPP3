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

// problemOne = checkArray();
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

// run = checkPalindrome()

function checkIncrement(){
    let array = [10, 12, 14, 6, 8];
    let findMin = array.filter(function(el){
        let counter = 0;
        for(let i = 0; i<array.length; i++){
            if(el<array[i]) counter++;
            if(counter == array.length-1) return el;
        }})
    let findMax = array.filter(function(el){
        let counter = 0;
        for(let i = 0; i<array.length; i++){
            if(el>array[i]) counter++;
            if(counter == array.length-1) return el;
        }})
    let increment = (findMax - findMin) / (array.length-1);
    let trueCounter =0;
    let checkAnswer = Number(findMin) + increment;
    for(let i = 1; i<array.length; i++){
        if(array.includes(checkAnswer)) {trueCounter++;}
        checkAnswer = checkAnswer + increment;
    }
    if (trueCounter == array.length-1) return console.log("true");
    else return console.log("false");
}

problemThree = checkIncrement();