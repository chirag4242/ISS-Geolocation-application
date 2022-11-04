//API link 
const api_URL = `https://api.wheretheiss.at/v1/satellites/25544`;

//Making a custom icon marker 
const issIcon = L.icon({
    iconUrl: './iss200.png',
    iconSize: [100, 50],
    iconAnchor: [25, 16]
});


//Making a map and tiles
const map = L.map('mapContainer').setView([0, 0], 1);
const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);


//function to retrieve a data from an api using fetch and seting up with latitude and longitude
async function getData()
{
    const response = await fetch(api_URL);
    const JsonData = await response.json();
    const { latitude, longitude, } = JsonData;
    marker.setLatLng([latitude, longitude]);
    document.getElementById('lat').innerText = latitude;
    document.getElementById('long').innerText = longitude;
}

getData();

