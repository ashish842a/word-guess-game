// var wordList= require("./words")

const inp = document.querySelector(".mid");
const inputbtn = document.querySelector("#input-text");
const resetbtn = document.querySelector("#resetbtn");
const letter = document.querySelector("#letter");
const hint = document.querySelector("#hint");
const no = document.querySelector("#no");

let word,wrongletter=[],correctletter=[];
let chance =5;

function randomWord(){
    chance =5;
    wrongletter=[],correctletter=[];
    let ranObj = wordList[Math.floor(Math.random()*wordList.length)];
    word = ranObj.word; //getting word of random object

    console.log(word);
    no.innerHTML=chance;
    hint.innerHTML=ranObj.hint;
    let html="";
    for(let i=0;i<word.length;i++){
        html+=`<input type="text" id="inp" disabled>`
    }
    inp.innerHTML=html
    letter.innerHTML=""
}

randomWord();

resetbtn.addEventListener("click",randomWord);
function activebtn(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)){
        console.log(key);
        if(word.includes(key) && !wrongletter.includes(key && !correctletter.includes(key))){
            for (let i = 0; i < word.length; i++) {
               if(word[i]===key){
                correctletter.push(key)
                inp.querySelectorAll("input")[i].value=key;
               }                
            }
        }
        else{
            --chance;
            wrongletter.push(key)
            console.log("letter not found");
        }
        no.innerHTML=chance;
        letter.textContent=wrongletter
    }
    inputbtn.value="";
    
            if(chance<0){
                chance=0;
                no.innerHTML=chance;
                alert("Game Over! Reset your game");
                for (let i = 0; i < word.length; i++) {
                    inp.querySelectorAll("input")[i].value=word[i];
                }
            }
}

inputbtn.addEventListener("input",activebtn)
document.addEventListener("keydown",()=>inputbtn.focus());
