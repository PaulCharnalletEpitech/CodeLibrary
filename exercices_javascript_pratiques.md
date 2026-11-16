# Exercices Pratiques JavaScript : Débutant à Intermédiaire

Ce guide contient **5 exercices progressifs** pour continuer à manipuler le DOM, gérer des événements et manipuler des structures de données en JS.

---

## 📌 Exercice 1 : Le Compteur de Clics (Niveau : Facile)
**Objectif :** Créer un petit compteur avec deux boutons : un pour incrémenter et un pour décrémenter un nombre affiché sur la page.

### 🎯 Consignes
1. Créez un titre `<h1>` qui affiche la valeur du compteur (départ à `0`).
2. Créez deux boutons : `+ 1` et `- 1`.
3. En cliquant sur `+ 1`, le nombre augmente de 1.
4. En cliquant sur `- 1`, le nombre diminue de 1.
5. **Bonus :** Si le compteur est négatif, le texte devient rouge. S'il est positif ou nul, il reste noir.

<details>
<summary>💡 Indices pour l'exercice 1 (Cliquez pour afficher)</summary>

* Déclarez une variable globale avec `let compte = 0;` pour stocker la valeur du compteur.
* Pour lire ou modifier le contenu du titre, utilisez `.textContent`.
* Pour modifier la couleur du texte : `element.style.color = "red";` ou `element.style.color = "black";`.
</details>

---

## 📌 Exercice 2 : La Liste de Tâches "To-Do" (Niveau : Facile +)
**Objectif :** Ajouter des éléments dynamiquement à une liste HTML via un champ de saisie (`<input>`).

### 🎯 Consignes
1. Créez un champ de texte `<input type="text" id="tache-input">` et un bouton `<button id="btn-ajouter">Ajouter</button>`.
2. Créez une liste vide `<ul>` avec l'id `liste-taches`.
3. Quand on clique sur le bouton "Ajouter" :
   * Récupérez le texte du champ de saisie.
   * Si le champ n'est pas vide, créez un nouvel élément `<li>`, mettez-y le texte et ajoutez-le dans le `<ul>`.
   * Videz le champ de texte après l'ajout.

<details>
<summary>💡 Indices pour l'exercice 2 (Cliquez pour afficher)</summary>

* Pour créer un nouvel élément HTML en JS : `const li = document.createElement('li');`.
* Pour ajouter un élément enfant à une liste : `document.getElementById('liste-taches').appendChild(li);`.
* Pour lire la valeur d'un input : `const texte = inputElement.value;`.
* Pour vider l'input : `inputElement.value = "";`.
</details>

---

## 📌 Exercice 3 : Le Générateur de Citations Aleatoires (Niveau : Moyen)
**Objectif :** Utiliser les **Tableaux (Arrays)** et la fonction de hasard `Math.random()`.

### 🎯 Consignes
1. Créez un tableau JavaScript contenant au moins 4 ou 5 phrases/citations sous forme de chaînes de caractères (`strings`).
2. Placez un paragraphe `<p id="citation">` et un bouton `"Nouvelle citation"`.
3. Au clic sur le bouton, tirez au sort une citation du tableau et affichez-la dans le paragraphe.

<details>
<summary>💡 Indices pour l'exercice 3 (Cliquez pour afficher)</summary>

* Déclaration d'un tableau : `const citations = ["Citation 1", "Citation 2", "Citation 3"];`.
* Pour obtenir un index aléatoire entre 0 et la taille du tableau :
  `const indexAleatoire = Math.floor(Math.random() * citations.length);`
* Récupérez l'élément du tableau grâce à l'index : `citations[indexAleatoire]`.
</details>

---

## 📌 Exercice 4 : La Visionneuse d'Images (Niveau : Moyen +)
**Objectif :** Modifier des attributs d'éléments HTML (`src`) et gérer l'état d'un composant.

### 🎯 Consignes
1. Placez une balise `<img id="galerie-img" src="..." alt="..." width="300">`.
2. Placez deux boutons : `Précédent` et `Suivant`.
3. Créez un tableau contenant les liens (URL) de 3 à 4 images.
4. Utilisez une variable pour retenir l'index de l'image actuelle (ex: `let indexImage = 0;`).
5. En cliquant sur "Suivant" ou "Précédent", modifiez la source de l'image (`src`) pour afficher l'image correspondante.

<details>
<summary>💡 Indices pour l'exercice 4 (Cliquez pour afficher)</summary>

* Pour changer l'image : `document.getElementById('galerie-img').src = tableauImages[indexImage];`.
* Pensez à gérer les limites : si `indexImage` dépasse la fin du tableau, remettez-le à `0` (boucle infinie). S'il descend en dessous de `0`, remettez-le au dernier élément (`tableauImages.length - 1`).
</details>

---

## 📌 Exercice 5 : Le Filtre de Recherche en Direct (Niveau : Intermédiaire)
**Objectif :** Écouter les événements clavier (`input`) pour filtrer une liste d'éléments en temps réel.

### 🎯 Consignes
1. Créez un champ de texte de recherche `<input type="text" id="recherche">`.
2. Créez une liste `<ul>` contenant au moins 6 à 8 items (ex: une liste de fruits ou d'outils web : HTML, CSS, PHP, JavaScript, React, SQL...).
3. À chaque fois que l'utilisateur tape une lettre dans le champ :
   * Parcourez tous les éléments `<li>`.
   * Comparez le texte du `<li>` avec la recherche.
   * Cachenz les éléments (`display: none`) qui ne contiennent pas les lettres tapées et affichez les autres.

<details>
<summary>💡 Indices pour l'exercice 5 (Cliquez pour afficher)</summary>

* Événement à écouter sur l'input : `rechercheInput.addEventListener('input', function() { ... })`.
* Pour vérifier si un texte contient une chaîne : `texteElement.toLowerCase().includes(recherche.toLowerCase())`.
* Convertir en minuscules (`.toLowerCase()`) est crucial pour que la recherche ne soit pas sensible à la casse (majuscules/minuscules).
</details>