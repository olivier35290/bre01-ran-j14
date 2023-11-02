window.addEventListener("DOMContentLoaded", function(){
	
	
    let ul = document.createElement("ul");
    
    let pokemons = ["Pikachu", "Salameche", "Bulbizarre", "Carapuce"];
    document.body.appendChild(ul);
    
   
    
   
    
    for (let i = 0; i < pokemons.length; i++){
        let pokemon = document.createTextNode(pokemons[i]);
        let li = document.createElement("li");
        ul.appendChild(li);
        li.appendChild(pokemon);
    }
    
   
});


// Utilisez le tableau de pokemons en JavaScript pour afficher une liste non ordonnées (ul) des pokemons du tableau dans le HTML.
