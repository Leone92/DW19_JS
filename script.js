/* 
Commentaire:
nous allons apprendre:

1 les variables
2 les conditions
3 les boucles
4 les fonctions
*/

/* Les variables :
Pourquoi les variables ? pour stocker des donées ex: nom d'un jeu - "jeu du plus ou du moins" 
une variable est constituer de 2 choses : le nom de la variable et la valeur de la variable
ex : tiroir A <= 10 Valeur

Le numerique ne contient pas de guillemet
les chaines de caracteres contiennent des guillemets
Additionner des nombres sa fonctionne
Additionner une chaine de caractere avec une autre choses fait de la concaténation (enchainement de termes)

*/
a=10 /* 10 rentre dans la variable A*/
b=50 /* Pareil*/
c="80" /* 10 Pareil A*/
b=90 /* B va contenir 90*/

console.error(a+b);
console.error(typeof(c));
console.error(a+parseInt(c));

/* EXO les variables*/

SEL=100;
SUCRE=80;



console.error("Nous avons du SEL en quantité de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE)
/* Le code affichera du Sel en quantité de 100. Nous avons du sucre en quantité de 80*/

/* INVERSEMENT DES VARIABLE SUCRE ET SEL */
TEMP=SEL; /*on le sauvegarde avec la valeur de sel */
SEL=SUCRE; /*SEL ON PEUT L ECRASER AVEC LA VALEUR DE SEL */
SUCRE=TEMP; /* SUcre on peut garder la valeur de sel*/
/* SEL ne contient pas la valeur du sucre initial cat il a etait ecraser */

console.error("Nous avons du SEL en quantité de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE)

/* Exo 2 PROMPT:
récuperer l'âge de l'utilisateur via la commande prompt
afficher l'age de l'utilisateur dans la console
afficher quel age aura l'utilisateur dans 2 ans */

age = prompt ("Quel est votre age ?") /* variable age va contenir le texte entré par l'uti*/
console.error(typeof(age))/*affiche dans la console la donnée qui est entrée. TYPEOF le type de variable */
console.error("L'utilisateur à" + age + "ans") /* question 2 */
plusdeux=parseInt(age)+2
console.error("L'utilisateur aura" + plusdeux + " ans ")

/*Exo 3
demander un prix d'un article via la commande prompt
afficher dans la console : l'article vaut 45 euros. 45 etant le prix
affichez dans la console : l'article vaut 50 euros TTC. prix *1.2 */

prix = prompt ("Combien vaut cet article ?")
console.error(typeof(prix))
console.error("L'artcle vaut 45 euros")
ttc=parseInt(prix)*1.2
console.error("l'article vaut" + ttc + "euros TTC")


