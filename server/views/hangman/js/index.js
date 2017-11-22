'use strict';
$(document).ready(function () {
    //global vars and html to be injected
    
    var word = 'hithere';
    var pickWord = '<p>player 1 choose your word</p><input type="password" class="word" id="word" placeholder="DON&#39;T LOOK PLAYER 2"> <button type="submit" class="submit" id="target">Click!</button>';
    var alphabetstring = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lives = 6;
    function alphabet() { 
        for (var i = 0; i < alphabetstring.length; i++) {
            var letter = alphabetstring[i];
            var htmlalpabet = '<button type="button" class="letter">'+ letter + '</button>';
            // make the alphabet appear
            $('.playerTwo').append(htmlalpabet);
        }
    };
    var wrong = ' stokje'; // this should be replaced by something more visual
    var wrongs = 0;
    var refresh = '<input type="button" value="Restart game" onClick="window.location.reload()">';
    var playerguess = '<input class="guessWord" value="Guess the word"><button type="submit" class="submit" id="guessTarget">Click!</button>';
    
    //---------------------------------------------------------//
    //                      player1
    //---------------------------------------------------------//
    /**
     * show the html for player to choose a word
     * save the word from player 1
     * hide the player 1 word
     */
        // html injection for playerOne div
        $('.playerOne').append(pickWord);
        $( "#target" ).click(function() {
            // save word localy and hide player 1 div
            word = $('.word').val();
            var player1 = word.toLowerCase().split('');
            $('.playerOne').hide();
            $('.playerTwoGuess').append(playerguess);
            // allows player 2 to guess the entire word.
            $('#guessTarget').click(function() {
                var guess= $('.guessWord').val();
                var playerGuess = guess.toLowerCase().split('');
                // win requirement for guess the word
                if (guess == word) {
                    alert('Victory!');
                }else {
                    $('.theHangman').append(wrong);
                };
            });

    //---------------------------------------------------------//
    //                      player2
    //---------------------------------------------------------//
            // show all the letters of the alphabet as buttons
            alphabet();
            
            $('.refresh').append(refresh);
            // display and then hide the word that player1 typed with css
            $('.playerTwoWord').append(word).html(function(index, html) {
                return html.replace(/\S/g, '<span class="selected $&">$&</span>');
            });
            
            // .split() word and compare with buttons being pressed by player 2
            // add click events too the letter buttons
            $('.letter').on("click", function (e) {
                var buttonclicked = e.target.innerText;
                // makes the background of the button grey thanks to css
                this.disabled="true";
                                
                // compare the player 2 letter to the array of player1
                if(player1.includes(buttonclicked)) {
                    // logic for succes
                    // set the color of the span that has the same inner html as buttonclicked to black
                    
                    var $span = $('.'+ buttonclicked +'');
                                        
                    if(buttonclicked = $span.hasClass('selected')){
                        //$span.removeClass("selected");
                        $span.removeClass('selected');

                        setTimeout(function() { 
                            if($('span').hasClass("selected") == false){
                                alert("You won! \n Switch players and choose a new word"); 
                                window.location.reload();
                            }
                        }, 1);
                        
                    }
                    
                    
                } else {
                    // not a correct letter                  
                    $('.theHangman').append(wrong);
                    var allWrongs = wrongs + 1;
                    wrongs = allWrongs;
                    if (wrongs == 6 ) {
                        alert("You lost! \n Switch players and choose a new word");
                        window.location.reload();
                    }

                };
                
            });
            
    }); // end of target, anything where playerOne's word is needed needs to be above this!
    
})
