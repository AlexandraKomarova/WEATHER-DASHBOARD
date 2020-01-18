$("#submit").on("click", function(event) {
    event.preventDefault();
    var APIKey= "f672a3ca6f6788e2e8340aff1c4b0ba6";
    var city = $("#input-field").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        console.log(response)
        $("#city").empty();
        $("#city").append(response.name)
        $("#temperature").empty();
        $("#temperature").append(response.main.temp)
        // $(".wind").append(response.wind.speed)
        // $(".humidity").append(response.main.humidity)
        
    
        });    
  });

