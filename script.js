$(document).ready(function(){

var searchButton = $(".search-button")

searchButton.click(function(){
var search = $(".search").val();    

if(search != ''){

$.ajax({

    url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + search + '&units=imperial' + '&cnt=6' + '&appid=1d52de8ed5525a7c1f7ee92bc570eea4',
    type: "GET",
    dataType: "json",
    success: function(data){
        console.log(data);
        
        var fiveDays= "";
        fiveDays += "<h2>" + data.city.name + "</h2>"; // City (displays once)
        
        $.each(data.list, function(index, val) {
          fiveDays += "<p>" // Opening paragraph tag
          fiveDays += "<b>Day " + index + "</b>: " // Day
          fiveDays += val.main.temp + "&degC" // Temperature
          fiveDays += "<span> | " + val.weather[0].description + "</span>"; // Description
          fiveDays += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>" // Icon
          fiveDays += "</p>" // Closing paragraph tag
        });
        $(".days").html(fiveDays);

    }



});

}else{
    alert("Please enter a city.");
}

});







});