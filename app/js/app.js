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

	var markers =  [{
            "count" : 20,
            "item" : {
              "longitude" : "-76.6467109421284",
              "latitude" : "39.282715815213734",
              "human_address" : "{\"address\":\"416 Monroe Street\",\"city\":\"\",\"state\":\"\",\"zip\":\"21223\"}"
            }
          }, {
            "count" : 19,
            "item" : {
              "longitude" : "-76.57272668760766",
              "latitude" : "39.321059618123286",
              "human_address" : "{\"address\":\"3120 Erdman Avenue\",\"city\":\"\",\"state\":\"\",\"zip\":\"21213\"}"
            	}
          }, {
            "count" : 18,
            "item" : {
              "longitude" : "-76.61689946066649",
              "latitude" : "39.317348011827555",
              "human_address" : "{\"address\":\"2439 Charles Street\",\"city\":\"\",\"state\":\"\",\"zip\":\"21218\"}"
            	}
          }, {
            "count" : 17,
            "item" : {
              "longitude" : "-76.64942087026634",
              "latitude" : "39.26934860143854",
              "human_address" : "{\"address\":\"2300 Washington Boulevard\",\"city\":\"\",\"state\":\"\",\"zip\":\"21230\"}"
            	}
          }, {
            "count" : 16,
            "item" : {
              "longitude" : "-76.61110975181816",
              "latitude" : "39.32380255031262",
              "human_address" : "{\"address\":\"2900 Barclay Street (Mosaic)\",\"city\":\"\",\"state\":\"\",\"zip\":\"21218\"}"
            	}
          }, {
            "count" : 15,
            "item" : {
              "longitude" : "-76.63118153080997",
              "latitude" : "39.328900494898825",
              "human_address" : "{\"address\":\"3424 Elm Avenue\",\"city\":\"\",\"state\":\"\",\"zip\":\"21211\"}"
            	}
          }, {
            "count" : 14,
            "item" : {
              "longitude" : "-76.60749999999996",
              "latitude" : "39.297300000000064",
              "human_address" : "{\"address\":\"436 W. Lafayette Street\",\"city\":\"\",\"state\":\"\",\"zip\":\"21202\"}"
            }
          }];

	
	for(var i = 0; markers.length; i++){
					L.marker( [markers[i].item.latitude, markers[i].item.longitude])
					.bindPopup( '<p>' + markers[i].item.human_address + '</p>' )
				  .addTo(artMap);
		}
		
console.log(artMap);
	
});

//