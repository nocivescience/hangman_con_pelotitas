const cardContainer=document.getElementById('cardContainer');
const cards=document.querySelectorAll('.card-body');
const listWords=['hola','adios','como','estas']
const wordSelected=listWords[Math.floor(Math.random()*listWords.length)]
function addCardsChance(n){
    for(let i=0;i<n;i++){
        const card=document.createElement('div');
        card.innerHTML=`
            <div class="card-chance">${i}</div>
        `;
        cards[0].appendChild(card)
    }
}
addCardsChance(5);