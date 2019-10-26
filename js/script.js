function start() {

    let ville=document.getElementById("city-input").value;
  // Création de l'objet apiWeather avec la ville de l'utilisateur
  const apiWeather = new API_WEATHER(ville);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });


  //on recupere la meteo des 3 prochains jours
    apiWeather
        .fetchThreeDayForecast()
        .then(function(response) {
            const data = response.data;
          let daysTwoMain = document.getElementsByClassName("days-two-forecast-main");
          let daysTwoDescription = document.getElementsByClassName("days-two-forecast-more-info");
          let daysTwoIcon = document.getElementsByClassName("days-two-icon-weather-container");
          let daysTwoTemp = document.getElementsByClassName("days-two-forecast-temp");
          let Temp;
            //ici on doit "sauter" la premiere valeur car nous la possédons déjà pour récupérer les trois dernieres.
            for(let i = 0; i<3; i++)
            {
                Temp = data.list[i + 1].temp.day;
                daysTwoTemp[i].innerHTML = `${Temp}°C`;
                daysTwoIcon[i].innerHTML = apiWeather.getHTMLElementFromIcon(data.list[i+1].weather[0].icon);
                daysTwoDescription[i].innerHTML = data.list[i+1].weather[0].description;
                daysTwoMain[i].innerHTML = data.list[i+1].weather[0].main;


            }
        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}