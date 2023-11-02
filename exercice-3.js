window.addEventListener("DOMContentLoaded", function(){
    
    let p = document.querySelector("p");
    let link = document.createElement("a");
    let linkContent =document.createTextNode("ici");
    link.href = "https://google.com";
    
    link.appendChild(linkContent);
    p.appendChild(link);
    
});





// Dans votre JavaScript faites en sorte d'ajouter un lien vers https://google.com à la fin du paragraphe, avec le mot "ici" en guise de lien.
