
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var countrieCapital = $('#country-capital');
var countrieArea = $('#country-area');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	
  countriesList.empty();
  countrieCapital.empty();
  countrieArea.empty();

  resp.forEach(function(item){
  	
    $('<li>').text(item.name).appendTo(countriesList);
   	$('<li>').text(item.capital).appendTo(countrieCapital);
   	$('<li>').text(item.area).appendTo(countrieArea);
  });

}