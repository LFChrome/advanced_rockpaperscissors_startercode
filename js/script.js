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
        user: ['Nothing','Quartz','Parchment','Shears'], 
        cpu: ['Quartz','Parchment','Shears']
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
        tie: "As the battle raged between both users of the parchment the overwhelming power released overloaded this realm, the battle ended with both of you laying on the ground.",
        lose: "The futuristic shears allowed your enemy to cut your chant. No words, no spell, no way to fight. It was a matter of time for your defeat."
};

var shears = {
        win: "Your enemy used multiple enchantments in a short period, however you cut spacetime around you, and went to the past where parchment was not.",
        tie: "A fight with two futuristic cutting devices created a mess with the spacetime. Your battle sent you outside of the multiverse and now you are stuck there for eternity with your enemy somewhere else.",
        lose: "You try to slash your enemy with your shears, however the quartz he was holding is unbreakable. Your blade shattered, and you were finished by a quartz laser."
};

var nothing = "You left the battlefield without a single fight, you will always be remembered as a coward for the rest of eternity.";

var glory = 0; 
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
        $('#user').html(userChoice);
        $('#cpu').html(cpuChoice);
        if (gameResult === 'QuartzQuartz') {
                $('#results').html('<p>' + quartz.tie + '</p>');
                $('#results').append('<h1>TIE</h1>');
        } else if (gameResult === 'QuartzParchment') {
                $('#results').html('<p>' + quartz.lose + '</p>');
                $('#results').append('<h1>DEFEAT</h1>');
                glory -= 1;
        } else if(gameResult === 'QuartzShears') {
                $('#results').html('<p>' + quartz.win + '</p>');
                $('#results').append('<h1>VICTORY</h1>');
                glory += 1;
        }
        
        else if(gameResult === 'ParchmentQuartz') {
                $('#results').html('<p>' + parchment.win + '</p>');
                $('#results').append('<h1>VICTORY</h1>');
                glory += 1;
        } else if(gameResult === 'ParchmentParchment') {
                $('#results').html('<p>' + parchment.tie + '</p>');
                $('#results').append('<h1>TIE</h1>');
        } else if(gameResult === 'ParchmentShears') {
                $('#results').html('<p>' + parchment.lose + '</p>');
                $('#results').append('<h1>DEFEAT</h1>');
                glory -= 1;
        }
        
        else if(gameResult === 'ShearsQuartz') {
                $('#results').html('<p>' + shears.lose + '</p>');
                $('#results').append('<h1>DEFEAT</h1>');
                glory -= 1;
        } else if(gameResult === 'ShearsParchment') {
                $('#results').html('<p>' + shears.win + '</p>');
                $('#results').append('<h1>VICTORY</h1>');
                glory += 1;
        } else if(gameResult ==='ShearsShears') {
                $('#results').html('<p>' + shears.tie + '</p>');
                $('#results').append('<h1>TIE</h1>');
        } 
        else {
                $('#results').html('<p>' + nothing + '</p>');
                $('#results').append('<h1>NOT A VALID OPTION</h1>');
                glory -= 1;
        }
}
// Update glory
function updateGlory() {
        $('#glory').html(glory);
}
$('#select').click(function() {
        userSelection();
        cpuSelection();
        result();
        updateGlory();
});

});