// displays map and its components

const currentCoord = [6.038362494644818, 116.12348641776353];





const map = L.map('map').setView(currentCoord, 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

