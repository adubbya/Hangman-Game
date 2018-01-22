 // VARIABLES
        // +++++++++++++++++++++++++++++++++++++++++
        // # of wins int, init at 0
        var winsNum = 0;
        //holy words 
        var words = ["camelot", "swamp", "grail", "witch", "shrubbery", "herring", "moose", "holy", "grenade"];
        // random word selector at start of game (page refresh for now)
        // var wordSel = words[Math.floor(Math.random() * words.length)];
        var wordSel = "test"; //test wordSel
        //array for blanks created from wordSelArr split
        var blanksArr = [];
        // wordSel split array
        var wordSelArr = wordSel.split("");
        // triesLeft =
        var triesLeft = 2;
        console.log("wordSel init: ", wordSel); //test

        // FUNCTIONS
        // ===========================================================================

        console.log("wordSelArr: ", wordSelArr.length) //test
        //for loop to replace guessword array with blanks on html page
        for (var i = 0; i < wordSelArr.length; i++) {
            blanksArr[i] = "_";
        }
        console.log("blanks: ", blanksArr); //test

        //document.querySelector("#start").innerHTML = html;   <==wanted to hide "press any key" after game begins, ohwell.

        // Display winsNum value on html page at #wins ID
        // document.querySelector("#wins").innerHTML = winsNum;
        // display "_" for each char of word
        document.querySelector("#guessWord").innerHTML = blanksArr.join(" ");
        console.log(document.querySelector("#guessRemain"))
        document.querySelector("#guessRemain").innerHTML = triesLeft;

        console.log("remains: ", triesLeft)

        // MAIN PROCESS
        // ==============================================================================
        // rabbit holes in some parts, craters in others..

        // Calling functions to start the game.

        //guessChar input and all of its' needy functions
        document.onkeyup = function (event) {
            // assign onkeyup event to guessChar var, force input to lowercase    
            var guessChar = event.key.toLowerCase();
            // incorrect guess boolean "switch"
            var failedGuess = true;

            // forEach to store wordSelArr
            wordSelArr.forEach(function (val, index, array) {
                // if user's input matches character in word, replace "_" with entered character, if it doesn't srym8
                if (guessChar === val) {
                    // boolean switch, if letter matches, failed is false
                    failedGuess = false;
                    console.log("guessChar val: ", val); //test
                    // blanksArr to create index of blanks based off of index of word
                    blanksArr[index] = val;
                    console.log("blank each: ", blanksArr); //test
                    // Display blanks
                    document.querySelector("#guessWord").innerHTML = blanksArr.join(" ");

                }
            })
            // if guess is incorrect (fail=true), decrement triesLeft value by 1
            if (failedGuess === true) {
                console.log("triesb4:", triesLeft);
                triesLeft = triesLeft - 1;
                document.querySelector("#guessRemain").innerHTML = triesLeft;
                console.log("tries after:", triesLeft);
            }

            // if triesLeft reaches 0, end game from the castle AAAAGGGGHHHH    
             if (triesLeft === 0) {
             document.body.innerHTML = '<img src="assets/images/monster.jpg">';
             };
            //test guessChar input, verified
            console.log(guessChar); //yay guessChar input lower case only
        };