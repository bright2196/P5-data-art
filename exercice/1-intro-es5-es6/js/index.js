/*
ES5
Rappel variables, fonctions
*/
var text = 'Je suis un texte' // string
var bool = true // boolean
var number = 1.222 // float / number
var array = ['1', 2, bool] // array
var object = {
    name: 'Charline',
    lastname: 'Laporte'
}

function getName(arguments) {
    // programme
    console.log(arguments)
}

/*
ES6
Comment on écrit les variables et les fonctions avec la nouvelle notation
*/

// 1 - variables
// si la variable est modifiable, on utilise le mot-clé "let"
let age = 27
age++

// si la variable est non-modifiable, on utilise le mot-clé "const"
const name = 'Charline'
//name = 'Charles' // ce code produit une erreur, il n'est pas possible de modifier une variable déclarée avec "const"

// 2 - fonctions
const myFunction = (params) => {
    console.log('mes paramètres sont', params)
}

//getNameES6('Charline')

/* 
Écrire une fonction qui prend en paramètre un tableau. 
Le tableau est composé en premier d’un nombre, votre âge, 
puis un objet avec propriétés nom / prénom
La fonction fonction retourne « Bonjour je m’appelle x y et j’ai x ans »
Console.log le résultat de la fonction
*/

const infos = (array) => {
    const name = array[1].name
    const lastname = array[1].lastname
    const age = array[0]
    const string = `Bonjour je m'appelle ${name} ${lastname} et j'ai ${age} ans`
    console.log(string)
}

const myName = {
    name: 'Paulin',
    lastname: 'Jouhet'
}
const myArray = [19, myName]
infos(myArray)

