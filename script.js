$(document).ready(function(){

var searchButton = $(".search-button")

searchButton.click(function(){
var search = $(".search").val();    

if(search != ''){

$.ajax({

    url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + search + '&units=imperial' + '&appid=1d52de8ed5525a7c1f7ee92bc570eea4',
    type: "GET",
    dataType: "jsonp",
    success: function(data){
        console.log(data);

    }



});

}else{
    alert("Please enter a city.");
}

});







});