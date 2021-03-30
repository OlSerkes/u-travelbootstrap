$get.JSON("http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&units=metric&APPID=e0ac0b668139f06627dd644c22f3ac6d",
 function(data){
     console.log(data);

     const icon = "http://openweathermap.org/img/w/" + data.weather.icon + ".png";
     $(".icon").attr("src", icon);
     
     

 })