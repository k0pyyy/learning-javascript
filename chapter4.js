// Working with arrays, including some common functions and stuff
// indexing is the same as any other language
let array = [1,2,3,4,5];
console.log(array)
array.push("fourteen")
console.log(array)


// How to create objects: they are essentially python dictionaries. 
// Hence the JSON file format: JavaScript Ojbect Notation
let example = {
    1: "hello there",
    "sheeple": "oh my goodness",
    isAnExample: true
}

console.log(example.sheeple);
console.log(example.isAnExample)

// Messing around with objects and assigning more variables
let base = {}
base.theGoods = ["These are the goods.", "This is also the goods."];

// Function to add things to an object
function addToBase(objectData, baseObj) {
    Object.assign(baseObj, objectData);
}

// Testing out that new function
addToBase({age: 21}, base);
console.log(base)

// Chapter 4 exercises

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers 
// from start up to (and including) end. Next, write a sum function that takes an array of numbers and 
// returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function range(start, end, step = 1) {
    let toReturn = [];
    if (start < end && step > 0) {
        for (let i = start; i <= end; i += step) {
            toReturn.push(i);
        }
    } else if (start > end && step < 0) {
        for (let i = start; i >= end; i += step) {
            toReturn.push(i);
        }
    } else {
        return [];
    }
    
    // return our newly created array
    return toReturn;
}

function sum(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum;
}

console.log(range(1, 10));

// Write two functions, both that reverse arrays. One does it in-place
function reverseArray(array) {
    let toReturn = [];
    for (let i = array.length - 1; i > -1; i--) {
        toReturn.push(array[i]);
    }
    return toReturn;
}

function reverseArrayInPlace(array) { 
    let front = 0, back = array.length - 1;
    while (front < back) {
        let temp = array[front];
        array[front] = array[back];
        array[back] = temp

        // iterate the values
        front++;
        back--;
    }
    console.log(array)
}

// make sure that the functions work
console.log(reverseArray(range(1, 10)));
reverseArrayInPlace(range(1, 10));

// THE LINKED LIST SERIES OF CHALLENGES, THESE WERE ACTUALLY KINDA FUN AND THE FIRST ONE WAS HARD
const arrayToList = function(array) {
    // create a head that we are going to be able to return
    let head = {};
    let current = null;

    // create an object that is going to be the current object that we are working with
    // Now build up head, and the rest of the lists
    for (let i = 0; i < array.length; i++) {
        
        // If this is the head, then we have to make the head
        if (i == 0) {
            head = {value: array[i], rest: null};
            current = head;
            continue;
        }

        // If this is not the head, then we need to work with the current object
        let toAppend = {value: array[i], rest: null}
        current.rest = toAppend;
        current = toAppend;
    }

    // The list should have been built up, so we can return the pointer to the head of the list
    return head;
}

// create an array from a linked list
function listToArray(list) {
    let toReturn = []
    let current = list;
    // Keep adding values while we can
    while (current != null) {
        toReturn.push(current.value);
        current = current.rest;
    }
    return toReturn;
}

// prepend an element to an existing list
function prepend(elem, list) {
    elem.rest = list;
    return elem; 
}

// get the nth value from a list
function nth(n, list) {
    let counter = 0;
    let current = list;
    while (current != null) {
        if (counter == n) {
            return current.value
        } else {
            current = current.rest;
            counter += 1;
        }
    }

    // if we have made it this var, then the list is smaller than the requested index of the element
    return "Error";
}

// implement nth, but recursive
// Note: this was so much easier to implement
function recursiveNth(n, list, counter = 0) {
    if (list == null) {
        return "error";
    } else if (n == counter) {
        return list.value;
    } else {
        return recursiveNth(n, list.rest, counter + 1);
    }
}

// Setup the test suite
let testArr = range(1, 3);
let testList  = arrayToList(testArr);
let testElem = {value: 0, rest: null};
let testingPrepend = prepend(testElem, testList);

// print the results
console.log(testList);
console.log(listToArray(testList));
console.log(testingPrepend);
console.log(nth(3, testingPrepend));
console.log(recursiveNth(2, testingPrepend));

// CREATING DEEP EQUALS
// NOTE THIS DOESN'T WORK RIGHT NOW
function deepEquals(obj1, obj2) {
    if (obj1 != null && obj2 != null && typeof(obj1) == typeof(obj2)) { // these objects can be compared
        // see if the lengths of the values in the object are the same, and then check the values for each one
        let numObj1Keys = Object.keys(obj1).length;
        let numObj2Keys = Object.keys(obj2).length;
        
        if (numObj1Keys != numObj2Keys) {
            return false;
        } else {
            // We can go value by value and compare
            for (value in Object.keys(obj1)) {
                if (typeof(obj1[value]) == typeof(Object)) {
                    return deepEquals(obj1[value], obj2[value]);
                } else {
                    if (obj1[value] !== obj2[value]) {
                        return false;
                    }
                }
            }
        }
        
        // I think if we get here then we are fine?
        return true;
    }
}

console.log(deepEquals(testList, testList));
console.log(deepEquals(testElem, testingPrepend));