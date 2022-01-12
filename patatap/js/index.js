/* 
Récupère le nom de notre utilisateur,
& on l'affiche dans le DOM
*/
const getName = () => {

    let name = sessionStorage.getItem('name')

    if (!name) {
        name = prompt(`Comment t'appelles-tu ?`)
        sessionStorage.setItem('name', name)
    }

    const span = document.getElementById('name')
    span.textContent = `Bonjour ${name}`
}

/* 
Écoute notre DOM à chque touche du clavier appuyée,
& on affiche la valeur de la touche si c'est une lettre
*/
window.addEventListener('keyup', 
    (event) => {

        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const isLetter = alphabet.includes(event.key)
        if (isLetter) {
            playSound(event.key)
            keyPressed.push(event.key)
        }
    }
)

const playSound = (key) => {
    const url = `sounds/${key}.mp3`
    const audio = new Audio(url)
    audio.play()

    audio.addEventListener(
        'ended', 
        () => {
            const index = keyPressed.indexOf(key)
            keyPressed.splice(index, 1)
        }
    )
}


/*

Écrire une fonction de pré-chargement de sons

- OK lancée au démarrage de notre site
- elle précharge les sons : canplaythrough => évènement
- quand un son est chargée elle l'affiche dans le HTML
- affichage du HTML : x / 26
- quand tous les sons ont fini de charger, 
on demande le prénom à notre utilisateur

*/

const loadSounds = () => {

    // 1 - Précharger les sons
    const soundsUrl = ['sounds/a.mp3', 'sounds/b.mp3', 'sounds/c.mp3', 'sounds/d.mp3', 'sounds/e.mp3', 'sounds/f.mp3', 'sounds/g.mp3', 'sounds/h.mp3', 'sounds/i.mp3', 'sounds/j.mp3', 'sounds/k.mp3', 'sounds/l.mp3', 'sounds/m.mp3', 'sounds/n.mp3', 'sounds/o.mp3', 'sounds/p.mp3', 'sounds/q.mp3', 'sounds/r.mp3', 'sounds/s.mp3', 'sounds/t.mp3', 'sounds/u.mp3', 'sounds/v.mp3', 'sounds/w.mp3', 'sounds/x.mp3', 'sounds/y.mp3', 'sounds/z.mp3']
    const number = document.getElementById('number')
    let numberOfSoundsLoaded = 0

    for (let i = 0; i < soundsUrl.length; i++){
        const url = soundsUrl[i]
        const audio = new Audio(url)

        audio.addEventListener(
            'canplaythrough',
            () => {
                // 2 - Afficher dans le DOM
                numberOfSoundsLoaded++
                number.textContent = numberOfSoundsLoaded

                // 3 - Quand tout est chargé demander le prénom
                if (numberOfSoundsLoaded === 26) {
                    const loader = document.getElementById('loader')
                    loader.classList.add('hide')
                    getName()
                }
            }
        )
        /*

        qui.addEventListener(
            string : quoi, 
            function : qu'est ce que je fait quand l'évènement est déclenché
        )
        
        */
    }
}

loadSounds()

const width = window.innerWidth
const height = window.innerHeight
let keyPressed = []

function setup() {
    const canvas = createCanvas(width, height)
    canvas.parent('canvasContainer')
}

function draw() {
    clear()
    background('rgba(0, 0, 0, 0)')
    if (keyPressed.includes('a')) shapeA()
    if (keyPressed.includes('b')) shapeB()
}

const shapeA = () => {
    fill('#FF0000')
    ellipse(width/ 2, height/ 2, 200)
}

const shapeB = () => {
    fill('#00FF00')
    ellipse(width / 3, height / 3, 20)
}


/*
Afficher et cacher la liste d'images
*/

const button = document.getElementById('colorsButton')
const container = document.querySelector('#colorsContainer')

button.addEventListener(
    'click',
    () => {
        container.classList.toggle('hide')
    }
)


/*
Récupérer une palette de couleurs à partir d'images

// 1 - Cliquer sur une image OK
// 2 - Récupère les couleurs depuis l'image cliquée
// 3 - Changer les couleurs des formes
*/

const images = document.querySelectorAll('.patatap__image') // tableau

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener(
        'click',
        () => {
            const src = images[i].getAttribute('src')
            const vibrant = new Vibrant(src)

            vibrant.getPalette((error, palette) => {
                console.log('palette', palette)
            })
        }
    )
}