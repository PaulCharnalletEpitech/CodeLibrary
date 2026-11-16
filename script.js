// Filtre //
// Pas optimisé (je pense) //
// Ici, trois fonction qui affichent et désaffichent des éléments //
// le .querySelectorAll permet de chercher tout les éléments puis le .forEach indique qu'on les affectera tous //
// Ensuite, la parentese du forEach, il y a deux actions à la suite //
// Premierement, il y a juste el, c'est pour lui dire d'appeler temporairement ces élement el //
// Ensuite, el.style indique qu'on va prendre le style des élements el //
// et .display car c'est ce qu'on va modifier //
// On met un = et "list-item / none" en fonction de ce qu'on veux (list-item c'est juste pour rester comme une ul) //
function filterall() {
  document
    .querySelectorAll("li")
    .forEach((el) => (el.style.display = "list-item"));
}
function filterfirst() {
  document.querySelectorAll("li").forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".prem")
    .forEach((el) => (el.style.display = "list-item"));
}
function filterlast() {
  document.querySelectorAll("li").forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".dern")
    .forEach((el) => (el.style.display = "list-item"));
}

// Volume //
// Ici on utilise let qui permet de créer une variable MAIS exclusivement pour cette fonction //
// On aurait just pu déclarer la variable, oui, mais autant faire ça //
// Cette variable appelé niveau va, grace au =, prendre une nouvelle valeur //
// getElementById nous indique l'id de l'objet a regarder, et le .value indique que c'est sa valeur qui nous interesse //
// Une fois fait, on change le span qui indique le volume grace à la deuxieme ligne //
// Elle cible l'id valeurvolume avec .innerHTML pour dire de changer son HTML et y mette la valeur de niveau //
function volumef() {
  let niveau = document.getElementById("volumeid").value;
  document.getElementById("valeurvolume").innerHTML = niveau;
  if (niveau === "100") {
    setTimeout(function () {
      alert("Attention ! Volume élevé");
    }, 500);
  }
}

// Onglet //
// Ici les getElementById permet de choisir spécifiquement l'objet avec l'id "contentxxx" //
// On rajouter .innerHTML pour pouvoir spécifier que c'est l'HTML de l'objet qui nous interesse//
// à ça, on fait = "le texte qu'on veux afficher à la place" //
function ongletHTML() {
  document.getElementById("contentmenu").innerHTML = "Je sais faire du HTML.";
}
function ongletCSS() {
  document.getElementById("contentmenu").innerHTML =
    "Je sais aussi faire du CSS.";
}
function ongletJS() {
  document.getElementById("contentmenu").innerHTML =
    "Mais pas JavaScript par contre";
}

// Compteur //
// Demarre le compteur a 0 //
// Avec ++ ou --, modifie le compteur //
// document.getElementById va chercher l'element avec l'id compteur dans le html, et le .textContent permet de modifier son contenu //
// Ici on le modifie avec la valeur compteur fraichement calculé //
// Lance ensuite la fonction pour vérifier si c'est negatif //
let compteur = 0
function compteurRemove() {
  compteur--;
  document.getElementById("compteur").textContent = compteur ;
  compteurNegatif();
}
function compteurAdd() {
  compteur++;
  document.getElementById("compteur").textContent = compteur ;
  compteurNegatif();
}
// Si le compteur est inferieur a 0 Change le style du id="compteur" pour un fond rouge, sinon le remet blanc //
function compteurNegatif() {
  if (compteur < 0) {
    document.getElementById("compteur").style.backgroundColor = "red";
  } else {
    document.getElementById("compteur").style.backgroundColor = "white";
  }
}

// To Do List //

function getToDo() {
  // Donne a toDo le texte ecrit dans "tache-input"
  const toDo = document.getElementById("tache-input").value;
  // Seuelemnt si toDo n'est pas vide (donc qu'on a ecrit quelque chose)
  if (toDo !== "") {
    // Permet d'utiliser li. pour créer une balise li
    const li = document.createElement("li");
    // en utilisant ce li. on va lui donner comme valeur le toDo
    li.textContent = toDo;
    // On ajoute le li au "listeTache"
    document.getElementById("liste-tache").appendChild(li);
    // On vite le tache input
    document.getElementById("tache-input").value = "";
  }
}

// NetflixNow

const film = ["Citizen Kane", "Dunes", "Interstellar", "Indiana Jones", "Obsession"];
function getNetflix() {
  // Pour faire de l'aleatoire, on fait comme ça :
  // Math.floor va arondir la valeur du calcul.
  // Math.random donne un chiffre A VIRGULE aleatoire entre 0 et 1 uniquement
  // En le multipliant par le nombre de film (film.lengh) on obtiendra
  // un nombre a virgule aléatoire en 0 et le nombre de film
  // Ce nombre arrondi va permet de chercher un element du tableau film
  // avec film[netflixRandom]

  const netflixRandom = Math.floor(Math.random() * film.length);
  document.getElementById("film").textContent = film[netflixRandom];

}

// Galerie D'image
const galerieNb = 4;
let galerieCount = 0;
function galeriePrev() {
  if (galerieCount > 0) {
    galerieCount--;
    document.getElementById("galerie-img").src = "media/lorem" + galerieCount + ".jpg";
  }
}

function galerieNext() {
  if (galerieCount < galerieNb + -1) {
    galerieCount++;
    document.getElementById("galerie-img").src = "media/lorem" + galerieCount + ".jpg";
  }
}



// Champ de recherche 

function recherche() {

  // Recherche html
  if (document.getElementById("recherche").value.toLowerCase().includes("html")) {
    document.getElementById("recherche-html").style.display = "block";
  } else {
        document.getElementById("recherche-html").style.display = "none";
  }

  // Recherche html
  if (document.getElementById("recherche").value.toLowerCase().includes("html")) {
    document.getElementById("recherche-html").style.display = "block";
  } else {
        document.getElementById("recherche-html").style.display = "none";
  }

  // Recherche html
  if (document.getElementById("recherche").value.toLowerCase().includes("html")) {
    document.getElementById("recherche-html").style.display = "block";
  } else {
        document.getElementById("recherche-html").style.display = "none";
  }

  // Recherche html
  if (document.getElementById("recherche").value.toLowerCase().includes("html")) {
    document.getElementById("recherche-html").style.display = "block";
  } else {
        document.getElementById("recherche-html").style.display = "none";
  }
}





