/*
On peut également "écouter" ce qu'il se passe sur un site.
CàD lancer une fonction lorsqu'une certaine action est déclenchée :
clic, hover, scroll, etc..

Liste les events possibles ici : https://www.w3schools.com/jsref/dom_obj_event.asp
*/

// 1 - Je récupère mes éléments HTML
const button = document.getElementById('button')
const p = document.getElementById('countdown')

// 2 - J'initialise une variable pour mon compteur
let number = 0

// 3 - J'écoute mon bouton 
// pour qu'à chaque clic, j'incrémente ma variable number
// et je l'affiche dans mon HTML, via la balise "p"
button.addEventListener(
    'click',
    () => {
        number++
        p.textContent = number
    }
)

// par defaut, chaque addEventListener, reçoit en paramètre de fonction, une variable "event"
// cette dernière contient toutes les informations en lien avec l'évènement
// et peut-être utilisée ou non
// ici par exemple, grâce à cette variable on récupère la touche appuyée 
// ici également on écoute "tout" notre site, avec le "document", au lieu d'écouter un tag précis en HTML
document.addEventListener(
    'keyup',
    (event) => {
        console.log('key up', event.key)
    }
)