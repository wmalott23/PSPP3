function addArray(){
    let target = prompt("Enter a number. I will return the indices of two numbers in my array that add up to that number.")
    let array = [5,17,77,50];
    let answerArray = array.filter(function(el){
        for(let i = 0; i<array.length; i++)
            if(el + array[i] == target) return true;
        })
    let resultOne = array.indexOf(answerArray[0]);
    let resultTwo = array.indexOf(answerArray[1]);
    let result = `${resultOne} and ${resultTwo}`;
    return result;
    }

problemOne = addArray();
console.log(problemOne)