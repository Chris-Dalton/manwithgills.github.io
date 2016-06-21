$(document).ready(function() {
  //test for Geolocation in Browser
  if ("geolocation" in navigator) {
    console.log("Geolocation is available");
  } else {
    console.log("Geolocation is NOT available");
  };
  //Get current coordinates 
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude + "," + position.coords.longitude);
//set countries not using metric system
var imperialCountries = ["US", "Liberia", "Myanmar"];
      //test array
      console.log(imperialCountries);    
    
    //Get City and State and place into location field.
    $.getJSON('//api.wunderground.com/api/d9631bbbc8a29740/geolookup/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json', function(data) {
 
 $("h1").append(data.location.city + ", " + data.location.state);

      //Get Weather Data 
      $.getJSON('//api.wunderground.com/api/d9631bbbc8a29740/conditions/q/'+data.location.state+'/'+data.location.city+'.json', function(conditions) {

        //Temp
       $("#tempBox").append(conditions.current_observation.temp_f + " &deg");
        
        
        
        //windspeed
        $("#windSpeed").append(conditions.current_observation.wind_mph+" MPH");
		//humidity
		$("#humidity").append(conditions.current_observation.relative_humidity);

        //icon
$("#iconBox").css(background-image, "url:(+'conditions.current_observation.icon_url'+)");

      })
    });

  });

});