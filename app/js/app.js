'use strict';



var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};
	return {
		init: _init
	};

	// var MapboxClient = require('mapbox');
	// var client = new MapboxClient('pk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxqc3B1bms1OGRqdXRtMGwyYXVtMHNmIn0.pvQrDdCwnQx8Mdrp6XozoA');
	// client.geocodeForward('Baltimore, MD', function(err, res){ 
	// });
})(document, jQuery);

(function() {
	app.init();

	var artMap = L.map('artMap').setView([39.31106, -76.615], 15);

	

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 15,
		id: 'mapbox.baltimore-dark',
		accessToken: 'pk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxtcWxxMG02OGFodHNrcGVzdnZ3YXFuIn0.FM69T3_XQ24DIhbOKiNhtg'
	}).addTo(artMap);

	// var circle = L.circle([39.310545, -76.591842], 500, {
 //    	color: 'red',
 //    	fillColor: '#f03',
 //    	fillOpacity: 0.5
	// }).addTo(artMap);

	var popup = L.popup();

	function onMapClick(e){
		popup.setLatLng(e.latlng).setContent("You clicked the map" + e.latlng.toString())
		.openOn(artMap);
	}
	
	artMap.on('click', onMapClick);

	var markers = $.ajax({
		url: "data/baltimoreMurals.json",
		context: document.body
	}).done(function(){
		return data;
		alert("data retrieved!");
	});

// var markers = $.getJSON("data/baltimoreMurals.json", function(json){
// 	var latitude = json.results[0].item.latitude;
// 	var longitude = json.results[0].item.longitude;
// 	var address = json.result[0].item.human_address;
// });

	
// for(var i = 0; markers.length; i++){
// 					L.marker( [markers[i].item.latitude, markers[i].item.longitude])
// 					.bindPopup( '<p>' + markers[i].item.human_address + '</p>' )
// 				  .addTo(artMap);
// 		}
		
console.log(markers);
	
 
 


})();

//