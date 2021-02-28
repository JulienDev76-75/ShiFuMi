//First step, a "choose name" pop up entering on the index
alert("Bienvenue au Mortal Shifumi");
var username = prompt("Veuillez rentrer votre nom de Kombattant :");
alert("Merci" + " " + username);

//Second step : create an simple array :
var tabchoice = ["Pierre", "Feuille", "Ciseaux"]; {
console.log(tabchoice);
//then we create a message in the screen with a player name
var Player = prompt("Veuillez choisir entre : " + tabchoice);
alert("Merci"+ " " + username);
// Je crée un choix aléatoire provenant d'un tableau ordonné simple, après avoir crée ce tableau tabchoice, je crée une nouvelle
//variable appellé IACHOICE afin de lui appliquer le tableau tabchoice comprenant une formule rendant le choix à l'intérieur du tableau
//aléatoire en leur donnant une valeur entière.
var IAchoice = tabchoice[Math.floor(Math.random()*3)];
alert("l'ordinateur a choisi :" + IAchoice);

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
//Je sais ce que tu vas me dire Thomas, mais le else { alert("tu as perdu etc.") } après le elfe is m'indiquait une erreur de syntaxe, le else était encadré comme étant une erreur,
// j'ai eu beau essayé, j'ai du contourner le problème