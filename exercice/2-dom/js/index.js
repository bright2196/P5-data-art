/*
Pour récupérer du html dans le javascript,
on utilise la variable 'document'.

Elle est définie par défaut dans tous les sites,
c'est une représentation javascript de notre site internet.
*/

console.log('Mon document', document)


// 1 - Récupérer du HTML via GET
const title = document.getElementById('title') // si un seul élément
const texts = document.getElementsByClassName('text') // si plusieurs éléments

// 2 - Récupérer du HTML via query
const titleQ = document.querySelector('#title') // si un seul élément
const textsQ = document.querySelectorAll('.text') // si plusieurs éléments
const textP = document.querySelectorAll('p.text') // on peut avoir des sélecteurs plus précis

// 3 - Modifier un élément, via la propriété textContent
console.log('ancien titre', title.textContent)
title.textContent = 'Nouveau titre'
console.log('nouveau titre', title.textContent)

