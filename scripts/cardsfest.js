var scrollTop = 0;
var homeTop = 0;
var artistsTop = $('#artists').position().top;
var calendarTop = $('#calendar').position().top;
var merchTop = $('#merch').position().top;
var sponsorsTop = $('#sponsors').position().top;
var mapTop = $('#map-canvas').parent().position().top;
var widget1200 = SC.Widget(document.getElementById('sc-widget-1200'));

/// ARGS DEFS:
//  i = li ending (a = artists, c = calendar, s = sponsors)
//  x = var reference for beginning of section
//  y = var reference for end of section
function expandLiSpan(i, x, y) {
	$('#header ul.navitems li#li' + i + ' span').css(
		'width', (128 * (scrollTop - x) / (y - x))
	);
}
function closeLiSpan(args) {
	var i;
	for (i = 0; i < args.length; i++) {
		$('#header ul.navitems li#li' + args[i] + ' span').css(
			'width', 0
		);
	}
}

$(window).scroll(function() {
	scrollTop = $(window).scrollTop();
	
	if (scrollTop >= 10) {
		expandLiSpan('h', homeTop, artistsTop);
		if (scrollTop >= artistsTop) {
			expandLiSpan('a', artistsTop, calendarTop);
			if (scrollTop >= calendarTop) {
				expandLiSpan('c', calendarTop, merchTop);
				if (scrollTop >= merchTop) {
					expandLiSpan('m', merchTop, sponsorsTop);
					if (scrollTop >= sponsorsTop) {
						expandLiSpan('s', sponsorsTop, mapTop);
					} else {
						closeLiSpan('s');
					}
				} else {
					closeLiSpan('m');
				}
			} else {
				closeLiSpan('c');
			}
		} else {
			closeLiSpan('a');
		}
	} else {
		closeLiSpan('h', 'a', 'c', 'm', 's');
	}
});

$('.lines-button').click(function() {
	$(this).toggleClass('close');
});

$('#header ul.navitems li').click(function() {
	if ($(this)[0].id == "lih") {
		$('html, body').animate({ scrollTop: 0 }, 1000);
	} else if ($(this)[0].id == "lia") {
		$('html, body').animate({ scrollTop: artistsTop }, 1000);
	} else if ($(this)[0].id == "lic") {
		$('html, body').animate({ scrollTop: calendarTop }, 1000);
	} else if ($(this)[0].id == "lis") {
		$('html, body').animate({ scrollTop: sponsorsTop }, 1000);
	}
});

$('.hb').click(function() {
	$(this).toggleClass('active').promise().done(function() {
		if ($(this).hasClass('ja')) {
			if ($(this).hasClass('active')) {
				widget1200.play();
			} else {
				widget1200.pause();
			}
		}
	});
});

$('.section.merch li.product').hover(function() {
    $(this).children('.overlay').slideToggle(300);
});

function initialize() {
	var styles = 
		[
		    {
		        "featureType": "landscape",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 65
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 51
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 30
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 40
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -100
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "hue": "#ffff00"
		            },
		            {
		                "lightness": -25
		            },
		            {
		                "saturation": -97
		            }
		        ]
		    }
		];
	var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
	var myLatlng = new google.maps.LatLng(38.2179731, -85.7563033);
	var mapOptions = {
		zoomControl: false,
		mapTypeControl: false,
		panControl: false,
		streetViewControl: false,
		scrollwheel: false,
		draggable: false,
		center: myLatlng,
		zoom: 18,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		animation: google.maps.Animation.DROP,
		title: 'CardsFest'
	});
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);