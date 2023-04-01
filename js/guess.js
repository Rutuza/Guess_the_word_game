const inputs = document.querySelector(".inputs"),
resetbtn = document.querySelector(".reset_btn"),
hint = document.querySelector(".hint span"),
typinginput = document.querySelector(".typinginpt"),
wrongletter = document.querySelector(".wrong_ltr span"),
remguess = document.querySelector(".guess_rem span");

let word, correct_letters = [], incorrect_letters = [], max_guesses;
function random_word()
{
    // getting random word from wordlist
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; //getting word of random object
    max_guesses = 5; 
    correct_letters = [];
    incorrect_letters = [];
    console.log(word); //prints the word

    hint.innerText = ranObj.hint;
    remguess.innerText = max_guesses;
    wrongletter.innerText = incorrect_letters;

    let html = "";
    for(let i = 0; i < word.length; i++){
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }     
    
}
random_word(); //calling that function


function initGame(e)
{
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrect_letters.includes(` ${key}`) && !correct_letters.includes(key))
    {
        console.log(key)
        if(word.includes(key))
        {
            for (let i = 0; i < word.length; i++)
            {
                //showing matched letter in the input value
                if(word[i] === key)
                {
                    // correct_letters.push(` ${key}`)
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }
                else
                {
                    max_guesses--; //max_guesses decremented by 1
                    incorrect_letters.push(` ${key}`);
                }
                remguess.innerText = max_guesses;
                wrongletter.innerText = incorrect_letters;
    }
    
   typinginput.value = "";

   function game_conditions()
   {
    while (max_guesses <= 1)
    {
        alert("Game Over!, You don't have any remaining guesses.")    
    }
   }

   game_over_and_win()
   {
     if(correct_letters == word.length)
     {
        alert("Congrats! You found the word");
        // return random_word();
     }
     else if(max_guesses < 1)
     {
        alert("Game Over!, You don't have remaining guesses");
        inputs.querySelectorAll("input")[i].value = word[i];
     }
   }
}

resetbtn.addEventListener("click", random_word);
typinginput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typinginput.focus());

