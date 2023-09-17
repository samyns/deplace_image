const blanc = document.querySelector('.image')
const container = document.querySelector('.container')
const arr = document.getElementById('arriere')
const titre = document.querySelector('.titre')
const titre2 = document.querySelector('.enfant.titre')
const parent = document.querySelector('.parent')





            window.addEventListener('mousemove', (e) =>{


                const mouv_blanc = 40
                const mouv_contain = 20

                let transletX = (e.clientX - window.innerWidth/2) / mouv_blanc
                let transletY = (e.clientY - window.innerHeight/2) / mouv_blanc



                let translet_X = (e.clientX - window.innerWidth/2) / mouv_contain -50
                let translet_Y = (e.clientY - window.innerHeight/2) / mouv_contain -50



                window.addEventListener('scroll', () => {});


                const bonjour = (-50 - translet_X) + transletX
                const bonjourY = (-50 - translet_Y) + transletY


                const tesY = (24.05 + transletY * 0.7)
                const tesX = (48.05 + transletX * 0.7)
                const tes2Y = (6.55 + transletY * 0.7)
                const tes2X = (30.55 + transletX * 0.7)
                const tes3Y = (14.4 + transletY * 0.1)
                const tes4Y = (14.4 + transletY * 0.1) + window.scrollY * -0.073

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
            window.addEventListener('scroll', () => {
                console.log(window.scrollY);
                const rect = titre2.getBoundingClientRect()
                const positionEnVW = {
                    top: rect.top / window.innerWidth * 100, // La position en haut en vw
                };
                const testY =14.4 + window.scrollY * -0.073
                console.log(positionEnVW.top)
                titre2.style.top = `${testY}vw`





            });





