var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var favorites = [];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

// On Click Add Random Start Ups text inside h1 with id of #xForY
$('#create').click(function(e) {
  $("#xForY").html('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
});

// On Click Store the startups into the array called favorites and log it into the console
$('#save').click(function(e) {
  favorites.push(startupX[random1], startupY[random2]);
  console.log("Saving to favorites");
  console.log(favorites);
});

// On Click print results of the favorites array to the screen
$('#print').click(function(e) {
  console.log("Printing Favorites to Screen");
  $("h2#favorites").html(favorites);
});

/* On Click print results of the favorites array with the first and second index with a space 
and comma to the screen */
$('#printTwo').click(function(e) {
  console.log("Printing Indexed Favorites to Screen");
  favorites.forEach(function(){
  	$("h2#favoritesTwo").html(favorites[0] + ', ' + favorites[1]);
  })
});
