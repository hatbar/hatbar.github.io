var y = new Date().getFullYear();
document.getElementById("year").innerHTML = y;

var map = L.map('map').setView([43.2147939,-108.5055465], 8);
var ggl = new L.Google('ROADMAP');
map.addLayer(ggl);
L.marker([43.2147939,-108.5055465])
    .addTo(map)
    .bindPopup("<b>Hat Bar Cattle Co.</b><br>1479 Missouri Valley Road<br>Riverton, WY 82501");