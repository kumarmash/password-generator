const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let genPassEl = document.getElementById("password-btn");
let passwordOneEL = document.getElementById("password1-El");
let passwordTwoEL = document.getElementById("password2-El");

let passwordLength = 16;

genPassEl.addEventListener("click", generatePassword);

function generatePassword() {
  // clear function call to clear passfield on clicked
    clearPass();

  for (let i = 1; i <= 16; i++) {
    let randomPassOne = getRandomChar() ;
    let randomPassTwo = getRandomChar() ;

    //setting random pass
    passwordOneEL.textContent += randomPassOne ;
    passwordTwoEL.textContent += randomPassTwo ;

  }

  
}

function getRandomChar() {
  randomNum = Math.floor(Math.random() * characters.length) ;

  for (let i = 1; i < characters.length; i++) {
    return characters[randomNum] ;
  }
}

function clearPass (){
    passwordOneEL.textContent = "" ; 
    passwordTwoEL.textContent = "" ;
}

