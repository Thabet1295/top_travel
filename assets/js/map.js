function LoadMap(propertes) {
    var defaultLat = 40.7110411;
    var defaultLng = -74.0110326;
    var mapOptions = {
        center: new google.maps.LatLng(defaultLat, defaultLng),
        zoom: 15,
        scrollwheel: false,
        styles: [
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    {visibility: "off"}
                ]
            },
            {
                featureType: 'poi.business',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
        ]
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var infoWindow = new google.maps.InfoWindow();
    var myLatlng = new google.maps.LatLng(40.7110411, -74.0110326);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
    (function (marker) {
        google.maps.event.addListener(marker, "click", function (e) {
            infoWindow.setContent("" +
                "<div class='map-properties contact-map-content'>" +
                "<div class='map-content'>" +
                "<p class='address'>20-21 Kathal St. Tampa City, FL</p>" +
                "<ul class='map-properties-list'> " +
                "<li><i class='flaticon-phone'></i>  +0477 8556 552</li> " +
                "<li><i class='flaticon-phone'></i>  info@themevessel.com</li> " +
                "<li><a href='index.html'><i class='fa fa-globe'></i>  http://www.example.com</li></a> " +
                "</ul>" +
                "</div>" +
                "</div>");
            infoWindow.open(map, marker);
        });
    })(marker);
}
LoadMap();