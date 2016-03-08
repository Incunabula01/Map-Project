'use strict';

var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
	var ArtMap = L.map('map').setView([-76.591842, 39.310545], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{ArtMap}/{z}/{x}/{y}.png?access_token={sk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxqdHVuZjk1YmdrdHNrcHViMHlyZ2pzIn0.WnwK5eiyVtlk1pf3120i8w}',{
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.mapbox-streets-v7',
		access_token: 'sk.eyJ1IjoiandpZGVuZXIwOCIsImEiOiJjaWxqdHVuZjk1YmdrdHNrcHViMHlyZ2pzIn0.WnwK5eiyVtlk1pf3120i8w'
	}).addTo(ArtMap);

})();

//mapbox://styles/jwidener08/ciljssllr002xaqluxdmor881