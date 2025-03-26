//recupero gli elementi del DOM e/o dichiaro variabili
const km = document.getElementById ('km')
const età = document.getElementById ('età')
const buttongenerate = document.getElementById ('buttongenerate')
const priceKm = 0.21;
const form = document.querySelector('form')
const nameField = document.getElementById ('nomecognome')

//card del biglietto
const myname = document.getElementById('myname')
const distanza = document.getElementById('distanza')
const annidelpasseggero = document.getElementById('annidelpasseggero')
const prezzobiglietto=document.getElementById('prezzobiglietto')

// corpo del programma
buttongenerate.addEventListener('click', function(){
    const chilometri = km.value;
    const age = età.value;

    let price = chilometri * priceKm;
    let finalPrice;

    if (age < 18) {
        finalPrice = price - price * 20 / 100;
    }
    else if ( age > 65) {
        finalPrice = price - price * 40 / 100
    }
    else{
        finalPrice = price;
    }



//     // risultato in console
// console.log(`Il prezzo è di ${finalPrice.toFixed(2)} \u20AC`)
})