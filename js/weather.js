const city = "Kyiv"


$get.JSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=e0ac0b668139f06627dd644c22f3ac6d",
 function(data){
     console.log(data);

     const icon = "http://openweathermap.org/img/w/" + data.weather.icon + ".png";
     $('.icon').attr("src", icon);

     const weather = data.weather.main;
     $('.weather').append(weather);

     const temp = Math.floor(data.main.temp);
     $('.temp').append(temp);
     
 })