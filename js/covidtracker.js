
document.querySelector('.')
$get.JSON("https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/actions/UKR/2021-03-30",
 function(data){
     console.log(data);

     const workschool = data.policy_type_display;
     $('.work-school').append(workschool);

     const weather = data.weather.main;
     $('.weather').append(weather);

     const temp = Math.floor(data.main.temp);
     $('.temp').append(temp);
     
 })
   