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
	// var artMap = L.map('map').;

	// L.tileLayer('https://api.tiles.mapbox.com/v4/{ArtMap}/{z}/{x}/{y}.png?access_token={}',{
	// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	// 	maxZoom: 18,
	// 	id: 'mapbox.mapbox-streets-v7',
	// 	access_token: ''
	// }).addTo(artMap);

	L.mapbox.accessToken = 'pk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxqc3B1bms1OGRqdXRtMGwyYXVtMHNmIn0.pvQrDdCwnQx8Mdrp6XozoA';
	L.mapbox.map('artMap', 'mapbox.mapbox-streets-v7', {
		mapbox://styles/jwidener08/ciljssllr002xaqluxdmor881
	}).setView([39.310545, -76.591842], 13);
	
	
})();

//