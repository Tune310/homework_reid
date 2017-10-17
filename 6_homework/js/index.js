// Convert Celsius to Fahrenheit

$('#convertCelsius').click(function(e) {
  var celsius = $('#amountCelsius').val() * 9 / 5 + 32;
  // $('#amountCelsius').val() * 9 / 5 + 32;
  console.log(Math.round(celsius));
  // $('#convertedToFahrenheit').html($('#amountCelsius').val() * 9 / 5 + 32);
  $('#convertedToFahrenheit').html(Math.round(celsius));
  return Math.round(celsius);
});	

// Convert Fahrenheit to Celsius

$('#convertFahrenheit').click(function(e) {
  var fahrenheit = ($('#amountFahrenheit').val() - 32) * 5 / 9;
  // console.log(($('#amountFahrenheit').val() - 32) * 5 / 9);
  console.log(Math.round(fahrenheit));
  // $('#convertedToCelsius').html(($('#amountFahrenheit').val() - 32) * 5 / 9);
  $('#convertedToCelsius').html(Math.round(fahrenheit));
  return Math.round(fahrenheit);
});	