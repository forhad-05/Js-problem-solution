// Import the readline module
const readline = require('readline');

// Create an interface to read lines from the standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter an integer
rl.question('Enter an integer: ', (input) => {
    // Parse the input to an integer
    const num = parseInt(input);

    // Check if the input is a valid number
    if (!isNaN(num)) {
        console.log('Next integer:', num + 1);
    } else {
        console.log('Please enter a valid integer.');
    }

    // Close the readline interface
    rl.close();
});
