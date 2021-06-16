// Create a function that is basically math.min that takes in two values
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(5, 6))
console.log(min(6, 5))
console.log(min(14, 14))

// create a recursive function to test even-ness
function isEven(number) {
    if (number == 0) {
        return true;
    } else if (number == 1 || number == -1) {
        return false;
    } else if (number < 0) {
        return isEven(number + 2);
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-2));

// Create a character counting function
function countBs(string) {
    return countChar("B", string);
}

function countChar(char = "", string = "") {
    let charCount = 0;
    for (index in string) {
        if (string[index] == char) {
            charCount++;
        }
    }
    return charCount;
}

console.log(countBs("BelloB Bhere"));
console.log(countChar("K", "Kyler Kopacz Kid Kopy yeet"))
