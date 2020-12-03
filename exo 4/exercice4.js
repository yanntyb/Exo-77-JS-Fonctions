/* Ecrire ci dessous une fonction permettant d'ajouter du texte dans le div appelé container */
function addTxt(container, text){
    container.innerHTML += text;
}


/* Appeler la fonction */
let div = document.getElementById("container");
addTxt(div,"text")




