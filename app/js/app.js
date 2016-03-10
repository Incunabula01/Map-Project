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
	var artMap = L.map('artMap').setView([39.310545, -76.591842], 15);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 15,
		id: 'mapbox.mapbox-streets-v4',
		accessToken: 'pk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxtcWxxMG02OGFodHNrcGVzdnZ3YXFuIn0.FM69T3_XQ24DIhbOKiNhtg'
	}).addTo(artMap);

	console.log(artMap);
	// mapboxgl.accessToken = 'p';

	// var map = new mapboxgl.Map({
	// 	container: 'artMap',
	// 	style: 'mapbox://styles/jwidener08/ciljssllr002xaqluxdmor881',
	// 	center: [39.310545, -76.591842],
	// 	zoom: 10
	// });
	// L.mapbox.map('artMap', 'mapbox.mapbox-streets').setView([39.310545, -76.591842], 10);
	
	
})();

//