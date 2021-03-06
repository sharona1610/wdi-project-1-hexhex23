$(document).ready(function() {

    //array of 52 playing cards
    arrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]

    arrayPlayed = [];

    var card;
    var five;
    var queen;
    var jackHeart = " "
    var jackDia = " "
    var jackSpade = " "
    var jackClub = " "

    //Click button to display card
    $("#button").click(function() {
        winningConditions()
        cardNumberGenerator()
        removingPlayedCard()
        console.log(arrayCards)
        displayImages()
        document.getElementById('ruleDisplay').textContent = displayRules(card)
        $('#imageDisplay').imagesLoaded(function() {
            jackRule()
            fiveRule()
            queenRule()
        })
    })

    //function generates random number between 1 to 52
    function cardNumberGenerator() {
        var indexGen = Math.floor(Math.random() * (arrayCards.length - 1))
        card = arrayCards[indexGen]
        console.log('index gen', indexGen);
        console.log('number gen', card)
        return card
    }

    //function removes played card from arrayCards and places it in arrayPlayed
    function removingPlayedCard() {
        var index = arrayCards.indexOf(card)
        console.log(index)
        if (index > -1) {
            arrayPlayed.push(parseInt(arrayCards.splice(index, 1)))
        }
        console.log('remove in play', arrayCards)
        console.log('played cards', arrayPlayed)
    }

    //function allows game to restart
    $("#restartbutton").click(function() {
        window.location.reload(true)
    })

    //function to display rules
    function displayRules(val) {
        var answer = "";
        switch (val) {
            case (1):
            case (14):
            case (27):
            case (40):
                answer = "ACE WATERFALL! Drink until the person who picked this card stops.";
                break;
            case (2):
            case (15):
            case (28):
            case (41):
                answer = "Pick someone to drink.";
                break;
            case (3):
            case (16):
            case (29):
            case (42):
                answer = "Drink up buddy (you drink).";
                break;
            case (4):
            case (17):
            case (30):
            case (43):
                answer = "Drink up ladies.";
                break;
            case (5):
            case (18):
            case (31):
            case (44):
                answer = "Thumb Master: Place your thumb on the table at any time and last person to follow suit, drinks.";
                break;
            case (6):
            case (19):
            case (32):
            case (45):
                answer = "Drink up lads.";
                break;
            case (7):
            case (20):
            case (33):
            case (46):
                answer = "Seven Heaven: Last to point to the skies, drink!";
                break;
            case (8):
            case (21):
            case (34):
            case (47):
                answer = "Pick a buddy to drink with you.";
                break;
            case (9):
            case (22):
            case (35):
            case (48):
                answer = "Pick a word to rhyme, go round the table.";
                break;
            case (10):
            case (23):
            case (36):
            case (49):
                answer = "Pick a category, go round the table.";
                break;
            case (11):
            case (24):
            case (37):
            case (50):
                answer = "Make up a rule everyone must follow for the rest of the game!";
                break;
            case (12):
            case (25):
            case (38):
            case (51):
                answer = "Question Master: If you ask a question and a player answers, they have to drink.";
                break;
            case (13):
            case (26):
            case (39):
            case (52):
                answer = "Add to the dirty pint. Whoever picks the 4th king, has to drink the pint.";
                break;
            case (53):
                answer = "Lets get started!"
        }
        return answer;
    }
    console.log(displayRules(card))


    //function to display a different img on button click
    // function displayImages() {
    //   document.querySelector("img").setAttribute("src", "'images/' + card + '.png'")
    // } console.log(displayImages())

    function displayImages() {
        if (card === 1) {
            document.querySelector("img").setAttribute("src", "images/acehearts.png")
        } else if (card === 2) {
            document.querySelector("img").setAttribute("src", "images/twohearts.png")
        } else if (card === 3) {
            document.querySelector("img").setAttribute("src", "images/threehearts.png")
        } else if (card === 4) {
            document.querySelector("img").setAttribute("src", "images/fourhearts.png")
        } else if (card === 5) {
            document.querySelector("img").setAttribute("src", "images/fivehearts.png")
        } else if (card === 6) {
            document.querySelector("img").setAttribute("src", "images/sixhearts.png")
        } else if (card === 7) {
            document.querySelector("img").setAttribute("src", "images/sevenhearts.png")
        } else if (card === 8) {
            document.querySelector("img").setAttribute("src", "images/eighthearts.png")
        } else if (card === 9) {
            document.querySelector("img").setAttribute("src", "images/ninehearts.png")
        } else if (card === 10) {
            document.querySelector("img").setAttribute("src", "images/tenhearts.png")
        } else if (card === 11) {
            document.querySelector("img").setAttribute("src", "images/jackhearts.png")
        } else if (card === 12) {
            document.querySelector("img").setAttribute("src", "images/queenhearts.png")
        } else if (card === 13) {
            document.querySelector("img").setAttribute("src", "images/kinghearts.png")
        } else if (card === 14) {
            document.querySelector("img").setAttribute("src", "images/acediamonds.png")
        } else if (card === 15) {
            document.querySelector("img").setAttribute("src", "images/twodiamonds.png")
        } else if (card === 16) {
            document.querySelector("img").setAttribute("src", "images/threediamonds.png")
        } else if (card === 17) {
            document.querySelector("img").setAttribute("src", "images/fourdiamonds.png")
        } else if (card === 18) {
            document.querySelector("img").setAttribute("src", "images/fivediamonds.png")
        } else if (card === 19) {
            document.querySelector("img").setAttribute("src", "images/sixdiamonds.png")
        } else if (card === 20) {
            document.querySelector("img").setAttribute("src", "images/sevendiamonds.png")
        } else if (card === 21) {
            document.querySelector("img").setAttribute("src", "images/eightdiamonds.png")
        } else if (card === 22) {
            document.querySelector("img").setAttribute("src", "images/ninediamonds.png")
        } else if (card === 23) {
            document.querySelector("img").setAttribute("src", "images/tendiamonds.png")
        } else if (card === 24) {
            document.querySelector("img").setAttribute("src", "images/jackdiamonds.png")
        } else if (card === 25) {
            document.querySelector("img").setAttribute("src", "images/queendiamonds.png")
        } else if (card === 26) {
            document.querySelector("img").setAttribute("src", "images/kingdiamonds.png")
        } else if (card === 27) {
            document.querySelector("img").setAttribute("src", "images/acespades.png")
        } else if (card === 28) {
            document.querySelector("img").setAttribute("src", "images/twospades.png")
        } else if (card === 29) {
            document.querySelector("img").setAttribute("src", "images/threespades.png")
        } else if (card === 30) {
            document.querySelector("img").setAttribute("src", "images/fourspades.png")
        } else if (card === 31) {
            document.querySelector("img").setAttribute("src", "images/fivespades.png")
        } else if (card === 32) {
            document.querySelector("img").setAttribute("src", "images/sixspades.png")
        } else if (card === 33) {
            document.querySelector("img").setAttribute("src", "images/sevenspades.png")
        } else if (card === 34) {
            document.querySelector("img").setAttribute("src", "images/eightspades.png")
        } else if (card === 35) {
            document.querySelector("img").setAttribute("src", "images/ninespades.png")
        } else if (card === 36) {
            document.querySelector("img").setAttribute("src", "images/tenspades.png")
        } else if (card === 37) {
            document.querySelector("img").setAttribute("src", "images/jackspades.png")
        } else if (card === 38) {
            document.querySelector("img").setAttribute("src", "images/queenspades.png")
        } else if (card === 39) {
            document.querySelector("img").setAttribute("src", "images/kingspades.png")
        } else if (card === 40) {
            document.querySelector("img").setAttribute("src", "images/aceclubs.png")
        } else if (card === 41) {
            document.querySelector("img").setAttribute("src", "images/twoclubs.png")
        } else if (card === 42) {
            document.querySelector("img").setAttribute("src", "images/threeclubs.png")
        } else if (card === 43) {
            document.querySelector("img").setAttribute("src", "images/fourclubs.png")
        } else if (card === 44) {
            document.querySelector("img").setAttribute("src", "images/fiveclubs.png")
        } else if (card === 45) {
            document.querySelector("img").setAttribute("src", "images/sixclubs.png")
        } else if (card === 46) {
            document.querySelector("img").setAttribute("src", "images/sevenclubs.png")
        } else if (card === 47) {
            document.querySelector("img").setAttribute("src", "images/eightclubs.png")
        } else if (card === 48) {
            document.querySelector("img").setAttribute("src", "images/nineclubs.png")
        } else if (card === 49) {
            document.querySelector("img").setAttribute("src", "images/tenclubs.png")
        } else if (card === 50) {
            document.querySelector("img").setAttribute("src", "images/jackclubs.png")
        } else if (card === 51) {
            document.querySelector("img").setAttribute("src", "images/queenclubs.png")
        } else if (card === 52) {
            document.querySelector("img").setAttribute("src", "images/kingclubs.png")
        } else if (card === 53) {
            document.querySelector("img").setAttribute("src", "images/StartCard.png")
        }
    }


    //function for displaying user rules when jack is played
    function jackRule() {
        if (card === 11) {
            jackHeart = prompt("Enter a rule for the rest of the game", "E.g No cursing")
        }
        if (card === 24) {
            jackDia = prompt("Enter a rule for the rest of the game", "E.g No cursing")
        }
        if (card === 37) {
            jackSpade = prompt("Enter a rule for the rest of the game", "E.g No cursing")
        }
        if (card === 50) {
            jackClub = prompt("Enter a rule for the rest of the game", "E.g No cursing")
        }
        document.getElementById('jackRuleDisplay').textContent = jackHeart + "\r\n" + jackDia + "\r\n" + jackSpade + "\r\n" + jackClub
    }


    //function for displaying user rules when five is played
    function fiveRule() {
        if (card === 5 || card === 18 || card === 31 || card === 44) {
            five = prompt("Who is the Thumb Master", "Name")
        }
        document.getElementById('thumbMaster').textContent = five
    }

    //function for displaying user rules when queen is played
    function queenRule() {
        if (card === 12 || card === 25 || card === 38 || card === 51) {
            queen = prompt("Who is the Question Master", "Name")
        }
        document.getElementById('questionMaster').textContent = queen
    }

    //function for determining if 4 kings have been played
    function winningConditions() {
        if (arrayPlayed.includes(13) === true && arrayPlayed.includes(26) === true && arrayPlayed.includes(39) === true && arrayPlayed.includes(52) === true) {
            swal({
                title: 'GAME OVER',
                text: '4th King Drawn: Drink The Dirty Pint',
                timer: 10000
            }).then(
                function() {},
                // handling the promise rejection
                function(dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer')
                    }
                }
            )
        }
    }

})
