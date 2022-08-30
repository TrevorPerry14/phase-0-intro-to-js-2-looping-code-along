// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"]
const birthday = []
function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        birthday.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        console.log(birthday)
        debugger
}
return birthday
}

function countDown(x) {
    do {console.log(x)
    x--}
    while (x >= 0)
}
countDown(10)
