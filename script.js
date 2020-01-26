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
            console.log(response)
            for (var i = 0; i < response.list.length; i+=8) {
                var futureTemp = response.list[i].main.temp
                console.log(futureTemp)
                var description = response.list[i].weather[0].description
                console.log(description)
                $(".five-days-cards-div").append(`<div class="day">
                <div class="5days-date">
                <span class="5days-month">1</span> /<span class="5days-day">17</span> /<span class="5days-year">2020</span>
                </div>
                <div class="5days-temp-div">Temp: <span class="5days-temp">${futureTemp} °F<span></div>
                <div>${description}</div>
              </div>
                `)
                
              }
              
              
            
        });   
    });    
  });

//   var fiveDays = [];
//   fiveDays.push(futureTemp)
//   console.log(fiveDays)

//   for(var i = 0; i < fiveDays.length; i++){
//     $(".5days-date").each(function(){
    
//         $(this).append(`<div class="5days-temp-div">Temp: <span class="5days-temp">${fiveDays[i]} °F<span></div>
//         `)
//     });
  
//   }

//   for(var i = 0; i < fiveDays.length; i++){
            //   $(".5days-date").append(`<div class="5days-temp-div">Temp: <span class="5days-temp">${fiveDays[i]} °F<span></div>
            //     `)
            //   }

//   $(".5days-temp").text(futureTemp)

  // $(".day").append(`<div>
                // ${response.list[i].main.temp}
                // </div>
                // `)

                // var futureTemp = response.list[i].main.temp
                // console.log(futureTemp)
                // fiveDays.push(futureTemp)

                
                // $(".5days-temp").append(futureTemp)
                
                
                // $(".5days-temp").text(futureTemp)

            // $(".5days-temp").empty();
            // $(".5days-temp-div").each(function(){
                
            //     $(this).children(".5days-temp").text(futureTemp)
            // });
            // console.log(fiveDays)
            // for(var i = 0; i < fiveDays.length; i++){
            //     // $(".5days-temp").text(fiveDays[i])

            //     $(".5days-temp").empty();
            //     $(".5days-temp").text(fiveDays[1])

                
            // }

