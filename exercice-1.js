window.addEventListener("DOMContentLoaded", function(){
	// votre code ici
	let newLi = document.createElement("li");
	let newLiText = document.createTextNode("Sucre");
	newLi.appendChild(newLiText); // on insère le texte dans le li
	let ul = document.getElementById("ingredients"); // je sélectionne mon ul
	ul.appendChild(newLi); // j'ajoute mon li à la fin de l'ul
	
});

// Dans votre JavaScript, faites en sorte d'ajouter le sucre à la fin de la liste des ingrédients.

/*let newLi = document.createElement("li");
let newLiText = document.createTextNode("Lancer une lessive");

newLi.appendChild(newLiText); // on insère le texte dans le li

let ul = document.getElementById("todo-list"); // je sélectionne mon ul
ul.appendChild(newLi); // j'ajoute mon li à la fin de l'ul
*/


