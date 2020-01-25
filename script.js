var APIKey= "f672a3ca6f6788e2e8340aff1c4b0ba6";
var darSkyAPIkey = "8fd26f25f35d8c3337f9174f566f20b8"
var landingCity = "Moscow"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + landingCity + "&appid=" + APIKey + "&units=imperial";

// show date
var moment = moment();
$("#date").text(moment.format("D"));
$("#month").text(moment.format("MMMM"));
$("#year").text(moment.format("YYYY"));

$("#submit").on("click", function(event) {
    event.preventDefault();
    var city = $("#input-field").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
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
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var UVqueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: UVqueryURL,
            method: "GET"
        })
            .then(function(response) {
                $("#uv-index").empty();
                $("#uv-index").append(response.value)
            });
        // display 5 day forecast
        var fiveDayqueryURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon + "&units=imperial";
        $.ajax({
            url: fiveDayqueryURL,
            method: "GET"
        })
        .then(function(response) {
            var fiveDays = [];
            for(var i = 0; i < response.list.length; i+=8){
                var futureTemp = response.list[i].main.temp
                console.log(futureTemp)
                fiveDays.push(futureTemp)

                // $(".5days-temp").empty();
                // $(".5days-temp").append(futureTemp)
                
                // $(".5days-temp-div").each(function(){
                //     console.log(futureTemp)
                //     $(this).children(".5days-temp").text(futureTemp)
                // });
                // $(".5days-temp").text(futureTemp)
            }
            // console.log(fiveDays)
            // for(var i = 0; i < fiveDays.length; i++){
            //     // $(".5days-temp").text(fiveDays[i])

            //     $(".5days-temp").empty();
            //     $(".5days-temp").text(fiveDays[1])

                // $(".5days-temp-div").each(function(){
                //     $(this).children(".5days-temp").text(fiveDays[i])
                // });
            // }
        });   
    });    
  });

