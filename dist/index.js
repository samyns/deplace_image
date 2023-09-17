const blanc = document.querySelector('.image')
const container = document.querySelector('.container')
const arr = document.getElementById('arriere')
const patitre = document.getElementById('titre')
const txt = document.getElementById('txt')
const titre = document.getElementById('titre_dedans')

window.addEventListener('mousemove', (e) =>{
    const mouv_blanc = 40
    const mouv_contain = 20

    let transletX = (e.clientX - window.innerWidth/2) / mouv_blanc
    let transletY = (e.clientY - window.innerHeight/2) / mouv_blanc



    let translet_X = (e.clientX - window.innerWidth/2) / mouv_contain -50
    let translet_Y = (e.clientY - window.innerHeight/2) / mouv_contain -50



    const bonjour = (-50 - translet_X) + transletX
    const bonjourY = (-50 - translet_Y) + transletY


    container.style.transform = `translateX(${translet_X}%) translateY(${translet_Y}% ) `
    arr.style.transform = `translateX(${translet_X}%) translateY(${translet_Y}% ) `

    blanc.style.transform = `translateX(${bonjour}%) translateY(${bonjourY}% ) scale( 1)`





})