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

$(document).ready(function() {

var game = {
        user: [1, 2, 3, 0],
        cpu: [5, 7, 11]
};
var cpuChoice = 0;
var userChoice = 0;
// CPU's choice
function cpuChoice() {
        // 0 = Quartz
        // 1 = Parchment
        // 2 = Shears
        cpuChoice = game.cpu[Math.floor(Math.random() * 3)];
}
// User's choice
function userChoice() {
        var choice = $('#input').val();
        var input = choice.toLowerCase();
        if (input === 'quartz') {
                userChoice = game.user[0];
        } else if (input === 'parchment') {
                userChoice = game.user[1];
        } else if (input === 'shears') {
                userChoice = game.user[2];
        } else {
                userChoice = game.user[3];
        }
}        
// Result
function result() {
        if () {
                
        }
}
$('#select').click(function() {
        userChoice();
        cpuChoice();
        
});

});