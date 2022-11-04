const api_URL = `https://api.wheretheiss.at/v1/satellites/25544`;
const map = L.map('mapContainer').setView([51.505, -0.09], 13);
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);
async function getData()
{
    const response = await fetch(api_URL);
    const JsonData = await response.json();
    const { latitude, longitude, } = JsonData;
    console.log(latitude, longitude);
    document.getElementById('lat').innerText = latitude;
    document.getElementById('long').innerText = longitude;
}

getData();

