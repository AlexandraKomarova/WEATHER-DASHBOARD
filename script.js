var APIKey= "f672a3ca6f6788e2e8340aff1c4b0ba6";
var landingCity = "Moscow"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + landingCity + "&appid=" + APIKey + "&units=imperial";

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response)
    $("#city").empty();
    $("#city").append(response.name)
    $("#country").empty();
    $("#country").append(response.sys.country)
    $("#temperature").empty();
    $("#temperature").append(response.main.temp)
    $("#wind-speed").empty();
    $("#wind-speed").append(response.wind.speed)
    $("#humidity").empty();
    $("#humidity").append(response.wind.speed)
    
    // display uv index

    });    

$("#submit").on("click", function(event) {
    event.preventDefault();
    var city = $("#input-field").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response)
        $("#city").empty();
        $("#city").append(response.name)
        $("#country").empty();
        $("#country").append(response.sys.country)
        $("#temperature").empty();
        $("#temperature").append(response.main.temp)
        $("#wind-speed").empty();
        $("#wind-speed").append(response.wind.speed)
        $("#humidity").empty();
        $("#humidity").append(response.wind.speed)
        
        // display uv index

        });    
  });

