// First exercise, make a triangle loop with console.log
// it says to do it 7 times.
let string = "#";
for (let i = 1; i < 7; i++) {
    console.log(string);
    string += "#"
}

// make fizzbuzz
for (let i = 1; i <= 100; i++) {
    // Technically this isn't really the most efficient, but it is pretty clean.
    let value = "";
    value += (i % 3) == 0 ? "Fizz" : "";
    value += (i % 5) == 0 ? "Buzz" : "";
    console.log((value.length == 0) ? i : value);
}

// Print a chessboard that we can have a varying size for
let size = 8;
let isSpace = true;
for (let i = 0; i < size; i++) {
    // Create the line that we are going to print right here
    let line = "";
    
    for (let j = 0; j < size; j++) {
        if (isSpace) {
            line += " ";
            isSpace = false;
        } else {
            line += "#";
            isSpace = true;
        }
    }
    // flip the line so it's different on the next line
    isSpace = (isSpace) ? false : true;
    console.log(line);
}