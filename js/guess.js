const inputs = document.querySelector(".inputs")
resetbtn = document.querySelector(".reset_btn")
hint = document.querySelector(".hint span")
typinginput = document.querySelector(".typinginpt")
wrongletter = document.querySelector(".wrong_ltr span")
remguess = document.querySelector(".guess_rem span")

let word, correct = [], incorrect = [], maxguess;
function random_word()
{
    // getting random word from wordlist
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; //getting word of random object
    maxguess = 5;
    console.log(word); //prints the word
   

    hint.innerText = ranObj.hint;
    remguess.innerText = maxguess;
    

    let html = "";
    for(let i = 0; i < word.length; i++){
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;  
}
random_word(); //calling that function

function initGame(e)
{
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrect.includes(` ${key}`) && !correct.includes(` ${key}`)) {
        console.log(key);
        if (word.includes(key)) { //if user letter found in the word
            for (let i = 0; i < word.length; i++) {
                //showing matched letter in input value
                if (word[i] === key) {
                    correct.push(key);
                    inputs.querySelectorAll("input")[i].value = key ;                   
                }
            }
        } else {
            maxguess--; //decrement by 1
            incorrect.push(` ${key}`);
        }
        remguess.innerText = maxguess;
        wrongletter.innerText = incorrect; //finding the incorrect letter

        if(maxguess < 1)
        {
            alert("Game Over!")
        }
        else if(maxguess == 0)
        {
            console.log(word);
        }
    }
    typinginput.value = ""; //checking value of user text
    
}
resetbtn.addEventListener("click", random_word);
typinginput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typinginput.focus());

