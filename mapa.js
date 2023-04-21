var map = L.map('map').setView([4.6098518540123225, -74.18490015258493], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([4.6098518540123225, -74.18490015258493]).addTo(map); 