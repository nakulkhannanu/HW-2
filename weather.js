
var getWeather = function(zipcode) {
  var openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
 
   var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {

	var obj = JSON.parse(this.responseText);

	 navigator.geolocation.getCurrentPosition(showPosition);

        document.getElementById("weather_img").src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";	       
        document.getElementById("city").innerHTML =  obj.name;
        document.getElementById("temp").innerHTML = "It is " + obj.main.temp + " degrees outside";
     }
   }; 
  xhttp.open("GET",openweathermap_api_url, true);
  xhttp.send();


  // TO DO: Make an asynchronous HTTP request here
  //        and parse the response when it becomes available.
}


function showPosition(position) {
    var latlon = "Latitude=" + position.coords.latitude + " Longitude=" + position.coords.longitude;
     console.log(latlon);
}

// Weather icon example: http://openweathermap.org/img/w/10d.png
// (The last part of the icon URL will be given by the API.
