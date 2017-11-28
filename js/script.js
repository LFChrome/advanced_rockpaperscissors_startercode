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
        user: ['n','q','p','s'], 
        cpu: ['q','p','s']
};

var cpuChoice = 0;
var userChoice = 0;
var gameResult = 0;

var quartz = {
        win: "Your enemy, using his shears, cut the spacetime and tried to escape; you shot an extra-dimensional laser, traveling across the multiverse and deconstructing your target.",
        tie: "You and your enemy pulled the quartz at the same time, you fired a laser form the tip of your quartz, however your enemy reflected it with his own, both of the quartzes desintegrated in the act.",
        lose: "You canalized energy and shot a beam, but your enemy's parchment quickly activated: ARS ARCANUM! A shining radiance vaporazed the laser, the quartz, and sent you to oblivion."
};

var parchment = {
        win: "You quickly shim through the parchment as your enemy gathers energy; you found the right enchantment: 'deleteEnemy(); .' Your enemy suddenly disappeared from this world.",
        tie: "",
        lose: ""
};
// CPU's choice
function cpuSelection() {
        cpuChoice = game.cpu[Math.floor(Math.random() * 3)];
}

// User's choice
function userSelection() {
        var choice = $('#input').val();
        var input = choice.toLowerCase();
        if (input === 'quartz') {
                userChoice = game.user[1];
        } else if (input === 'parchment') {
                userChoice = game.user[2];
        } else if (input === 'shears') {
                userChoice = game.user[3];
        } else {
                userChoice = game.user[0];
        }
}        

// Result
function result() {
        gameResult = userChoice + cpuChoice ;
        if (gameResult === 'qq') {
                $('#results').html('<p>' + quartz.tie + '</p>');
                $('#results').append('<h1>TIE</h1>');
        } else if (gameResult === 'qp') {
                $('#results').html('<p>' + quartz.lose + '</p>');
                $('#results').append('<h1>DEFEAT</h1>');
        } else if(gameResult === 'qs') {
                $('#results').html('<p>' + quartz.win + '</p>');
                $('#results').append('<h1>VICTORY</h1>');
        }
        
        else if(gameResult === 'pq') {
                $('#results').html('<p>' + parchment.win + '</p>');
                $('#results').append('<h1>VICTORY</h1>');
        } else if(gameResult === 'pp') {
                $('#results').append('<h1>TIE</h1>');
        } else if(gameResult === 'ps') {
                $('#results').append('<h1>DEFEAT</h1>');
        }
        
        else if(gameResult === 'sq') {
                $('#results').append('<h1>DEFEAT</h1>');
        } else if(gameResult === 'sp') {
                $('#results').append('<h1>VICTORY</h1>');
        } else if(gameResult ==='ss') {
                $('#results').append('<h1>TIE</h1>');
        }
}

$('#select').click(function() {
        userSelection();
        cpuSelection();
        result();
});

});