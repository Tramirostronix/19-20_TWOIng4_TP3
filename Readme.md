Ga�tan Lajeune GROUPE 02

# TP 3

A lire impérativement avant de commencer quoi que ce soit, ce sont les règles que vous devrez appliquer tout au long du semestre:

<p align="center">
 <a href="https://github.com/clementAC/Instructions-Technologies-Web-OCRES-Ing4/blob/master/README.md">Règles pour le semestre</a>
</p>

## Instructions

1. Comprendre le code en HTML et JS

2. Faire en sorte que la fonction start() soit executée sans appuyer sur le bouton #button-load-forecast.
Le bouton se sert donc plus à rien, il faut l'enlever.
*Hint: Voir la propriété onload.*

3. Par défault la ville choisi pour les prédictions météo est Paris. Faire en sorte que votre user puisse rentrer le nom d'une ville dans l'input. Lorsqu'il appuit sur **Actualiser** cela actualise les informations avec la bonne ville. Il faut donc faire une requete différente.
*Hint: [Comment récupérer la valeur d'un input](https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript)*

4. Chercher les prévisions météo pour les trois jours à venir.
*Hint: utiliser [la même API mais un end point différent](https://openweathermap.org/forecast16)*

* Créer une autre fonction ei: ```function getThreeDayForecast(){...}```
* Cette API retourne les prévisions sur les **16 prochains jours.** Prennez donc les trois premiers. 
* Utilisez les fonctions map, filter, sort pour manipuler la data.
* Je vous conseille vivement d'afficher ce que retourne cette API afin de voir ou chercher l'information.
* Afficher les mêmes informations que pour la météo d'aujourd'hui, a savoir : le temps principal 'main', la description, la température en Celsius, l'icon.

5. Le code inital est responsive, faire en sorte qu'il le reste...