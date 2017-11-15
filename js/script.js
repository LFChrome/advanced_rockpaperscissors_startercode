//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
// Global variables
var game = {
        userChoice: '',
        cpuChoice: '',
        result: 0,
        textResult: '',
};
// CPU's choice
function cpuChoice() {
        var random = Math.floor(Math.random() * 3) + 1;
        // 1 = Quartz
        // 2 = Parchment
        // 3 = Shears
        game.cpuChoice = random;
}
// User's choice
function userChoice() {
        var input = $('#input').val();
        if (input === 'quartz') {
                game.userChoice = 5;
        } else if (input === 'parchment') {
                game.userChoice = 7;
        } else if (input === 'shears') {
                game.userChoice = 11;
        } else {
                game.userChoice = 0;
        }
}        

