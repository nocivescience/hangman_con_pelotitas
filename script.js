const cardContainer=document.getElementById('cardContainer');
const cards=document.querySelectorAll('.card-body');
const listWords=['hola','adios','como','estas']
const wordSelected=listWords[Math.floor(Math.random()*listWords.length)];
let correctLetters=[];
let wrongLetters=[];
