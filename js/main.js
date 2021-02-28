//Fenêtre Pop-up message d'accueil en JS par la commande "alert"
alert("Bienvenue au Mortal Shifumi");
var username = prompt("Veuillez rentrer votre nom de Kombattant :");
alert("Merci" + " " + username);

//création de tableaux Pierre, Feuille, Ciseaux ordonné simple
var tabchoice = ["Pierre", "Feuille", "Ciseaux"]; {
console.log(tabchoice);
var Player = prompt("Veuillez choisir entre : " + tabchoice);
alert("Merci"+ " " + username);

//le but ici est que si le joueur ne rentre pas Pierre, Feuille ou Ciseaux, un message alerte et il faut choisir de nouveau

if ((Player === "Pierre") || (Player === "Feuille") || (Player === "Ciseaux")) {
  alert("vous avez choisi" + " : " + Player);
}
else {
  alert("veuillez rentrez un choix correct");
}


//Le but de ce code est de donner une valeur aléatoire venant de TABCHOICE
//On indique qu'on crée une var IACHOICE dont une valeur contenue DANS le tableau tabchoice sera sortie aléatoirement
//Math.floor renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
//Math.random renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle 0, 1 selon une distribution approximativement uniforme sur cet intervalle
//donc math.floor(math.random) génère un nombre aléatoire flottant qui sera transformé en ENTIER parmi les 3 choix  du tableau *3
var IAchoice = tabchoice[Math.floor(Math.random()*3)];
alert("l'ordinateur a choisi" + " : " + IAchoice);

//condition : ATTENTION j'ai essayé la sctructure IF ELSE IF et ELSE, mais ça ne marche pas, le dernier ELSE étant indiqué comme une erreur de syntaxe, les conditions IF et Else if 
//fonctionnaient, mais j'ai du changé par une structure IF simple. Le code aurait pu être simplifié.
if (Player === IAchoice) {
    alert("Egalité, il faut essayer de nouveau !");
}

if ((Player === tabchoice[0] && IAchoice === tabchoice[2]) || (Player === tabchoice[2] && IAchoice === tabchoice[1]) || (Player === tabchoice[1]) && (IAchoice === tabchoice[0])) {
    alert("Tu as gagné, t'es vraiment trop fort et surtout trop de chance");
}

if ((Player === tabchoice[0] && IAchoice === tabchoice[1]) || (Player === tabchoice[1] && IAchoice === tabchoice[2]) || (Player === tabchoice[2]) && (IAchoice === tabchoice[0])) {
  alert("tu as perdu, mais ce n'est pas très étonnant");
  }
}

