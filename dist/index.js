const blanc = document.querySelector('.image')
const container = document.querySelector('.container')
const arr = document.getElementById('arriere')
const titre = document.querySelector('.titre')
const titre2 = document.querySelector('.enfant.titre')
const parent = document.querySelector('.parent')





            window.addEventListener('mousemove', (e) => {


                const mouv_blanc = 40
                const mouv_contain = 20

                let transletX = (e.clientX - window.innerWidth / 2) / mouv_blanc
                let transletY = (e.clientY - window.innerHeight / 2) / mouv_blanc


                let translet_X = (e.clientX - window.innerWidth / 2) / mouv_contain - 50
                let translet_Y = (e.clientY - window.innerHeight / 2) / mouv_contain - 50




                const bonjour = (-50 - translet_X) + transletX
                const bonjourY = (-50 - translet_Y) + transletY


                const tesY = (24.05 + transletY * 0.7)
                const tesX = (48.05 + transletX * 0.7)
                const tes2Y = (6.55 + transletY * 0.7)
                const tes2X = (30.55 + transletX * 0.7)
                const tes3Y = (14.4 + transletY * 0.1)

                const tes4Y = (14.4 + transletY * 0.1 - scrollY * 0.0724)


                const tes3X = (5 + transletX * 0.1)
                container.style.top = `${tesY}vw`
                container.style.left = `${tesX}vw`
                parent.style.top = `${tes2Y}vw`
                parent.style.left = `${tes2X}vw`
                titre.style.top = `${tes3Y}vw`
                titre.style.left = `${tes3X}%`
                titre2.style.top = `${tes4Y}vw`
                titre2.style.left = `${tes3X}%`

                arr.style.transform = `translateX(${translet_X}%) translateY(${translet_Y}% ) `
                blanc.style.transform = `translateX(${bonjour}%) translateY(${bonjourY}% ) scale( 1)`


            })





window.addEventListener('scroll', (e) => {
    const scrollY = window.scrollY ;

        const newTopValue = (14.4 - scrollY * 0.0724);
        titre2.style.top = `${newTopValue}vw`;




});

