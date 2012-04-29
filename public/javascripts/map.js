// live('pageshow') rather than pageinit keeps the map from moving to the top
// left corner of the screen.

$('.page-map').live("pageshow", function() {

/*
var me = function(lat, lng) {
    var posi = new google.maps.LatLng(lat, lng);
    var marker = new google.maps.Marker({
            map: map,
            position: posi,
            title: "You are here!"
        });
        bubble.open(map, marker);
};

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        me(position.coords.latitude, position.coords.latitude);
        }, function() {
        });
} else {
}
*/

$.parse.init({
    app_id: "9vbpyfY5iHZqFmq4Fjh2mbUeCAs9vXLjfnIgmUm5",
    rest_key: "ptYuPEQ4l6mugCYtu2uRHi5X4S0taWNc4Tdd61rC"
});

    $.parse.get("Pub", { limit : 1000 }, function(data) {

        var latlng = new google.maps.LatLng(59.920, 10.750);  
        var map = new google.maps.Map(document.getElementById("map-canvas"), {
                // zoom is good on iphone @ 13 but better on desktop @ 14
                zoom: 12,
                center: latlng,
                backgroundColor: 'black',
                mapTypeControlOptions: { 
                    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
                },
                mapTypeId: google.maps.MapTypeId.HYBRID
        }); 
        var bubble = new google.maps.InfoWindow();
        var pubs = data.results;

        $.each(pubs, function(i, pub) {

            var beer;
            var pubaddress = encodeURI(pub.pub_address);
            var pubname = encodeURI(pub.pub_name);
            var posi = new google.maps.LatLng(pub.lat, pub.lng);
            var marker = new google.maps.Marker({
                animation: (pub.pub_bounce === true) ? google.maps.Animation.BOUNCE : null,
                map: map,
                icon: "images/" + pub.beer_price + ".png",
                shadow: 'images/shadow.png',
                position: posi,
                title: pub.pub_name
            });

            if (pub.beer_price === 99) {
                marker.setZIndex(1);
            } else {
                marker.setZIndex(100);
            }

            google.maps.event.addListener(marker, 'click', function() {
                // http://mapki.com/wiki/Google_Map_Parameters
                    if (pub.beer_price === 99) {
                        beer = '?';
                    } else {
                        beer = pub.beer_price; 
                    }

                tweet = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://oslogigs.com" data-text="' + pub.pub_name + ' ' + pub.beer_price + 
                ' kr.' + '" data-lang="en" data-via="OsloGigs" data-hashtags="oslo, oslogigs, norway">Tweet</a>';

                content_string = '<h1>'+  pub.pub_name + '</h1>'+
                '<p><a href="http://maps.google.com/?saddr=Current%20Location&daddr=' + 
                pubaddress + '+(' + pubname + ')&dirflg=w&t=h">Google Maps Directions</a></p>' +
                '<p>Phone:<a href="tel:' + pub.pub_phone + '">' + pub.pub_phone + '</a></p>' +
                '<p>Halvliterpris: NOK <b>' + beer + '</b></p><p>' + tweet + '</p>';


            bubble.setContent(content_string);
            //console.log(bubble.getContent());
            bubble.open(map, this);
            twttr.widgets.load();
            });
/*
            google.maps.event.addListener(bubble, 'domready', function() {
            //$('.twitter-share-button').on('domready', function(event) {
               console.log("Iteration:"+ i + " Twitter javascript loaded " + pub.pub_name);
               !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            });
            */
        });
    });
});
