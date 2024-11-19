//afficher le texte de la balise ayant l'id 'titre2'
//afficher le nombre de balises ayant la classe 'titre'
//afficher le texte de toutes les balises ayant la classe 'titre'
//afficher le texte de toutes les balises 'li'

let h2 = document.getElementById("titre2");
if (titre2) {
    console.log(h2.textcontent);
} else {
    console.log("l'élèment id n'as pas été trouver");
}

//changer le contenu du h1 en 'Bienvenue'
//changer le contenu du h2 en 'Exo JS'
//changer le contenu paragraphe en 'Voici quelques fonctions exécutées en javascript.'
//changer le contenu de chaque point (li) de la liste en "Liste 1", "Liste 2", etc...

h1 = textcontent(titre1)


//aligner le titre 1 au centre de la page
//mettre en rouge tous les éléments ayant la classe 'titre'
//mettre une bordure 'solid 1px black' et un padding '10px' au paragraphe
//faire disparaître la liste

//--------------------------exo 1 Lire le DOM ---------------------------------------

//active les boutons pour mener une action

let buttonDom = document.getElementById("dom");
buttonDom.addEventListener("click", function () {
    alert("Lecture du DOM");
});

//afficher le texte de la balise ayant l'id 'titre2'

let titre2 = document.getElementById("titre2");
console.log(titre2.textContent);

//afficher le nombre de balises ayant la classe 'titre'

let titres = document.getElementsByClassName('titre');
console.log(`Nombre de balises classe titre : ${titres.length}`);

//afficher le texte de toutes les balises ayant la classe 'titre'

let allTitres = document.querySelectorAll('.titre');
allTitres.forEach((titre) => {
    console.log(titre.textContent);
});

//afficher le texte de toutes les balises 'li'

let allLi = document.querySelectorAll('li');
allLi.forEach((li) => {
    console.log(li.textContent)
})

//--------------------------Exo 1;1 Modifier le DOM------------------------------



//changer le contenu du h1 en 'Bienvenue'
let titre = document.getElementById("titre");
titre.textContent = "Bienvenue";
console.log(titre.textContent);

//changer le contenu du h2 en 'Exo JS'


//changer le contenu paragraphe en 'Voici quelques fonctions exécutées en javascript.'

//changer le contenu de chaque point (li) de la liste en "Liste 1", "Liste 2", etc...

//--------------------------Exo 1;2 Modifier le style--------------------------



//aligner le titre 1 au centre de la page

//mettre en rouge tous les éléments ayant la classe 'titre'

//mettre une bordure 'solid 1px black' et un padding '10px' au paragraphe

//faire disparaître la liste

