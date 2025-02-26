const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", (num) => {
    const parsedNum = parseInt(num);

    if (isNaN(parsedNum)) {
        console.log("Invalid input! Please enter a valid integer.");
    } else {
        console.log("The next integer is:", parsedNum + 1);
    }
    
    rl.close();
});
