window.addEventListener("DOMContentLoaded", function(){
	// votre code ici
	
// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Le titre de la deuxième section"
let contenuParagraphe = "Le paragraphe de la deuxième section"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h2 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h2")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)


});





//Dans votre JavaScript, faites en sorte d'ajouter un titre h2 "Le titre de la deuxième section" puis un paragraphe "Le paragraphe de la deuxième section" à la seconde section.