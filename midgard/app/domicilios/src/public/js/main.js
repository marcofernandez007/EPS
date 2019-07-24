var map = L.map('map-template').setView([4.6097102, -74.081749],11);

const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

const tile = L.tileLayer(tileURL2);

// Socket Io
const socket = io.connect();

// Marker
const marker = L.marker([4.6097102, -74.081749]); // Bogota
marker.bindPopup('MIDGARD E.P.S.');
map.addLayer(marker);

// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  //const coords = [2.6097102, -75.081749];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('Entrega de Medicamento a Domicilio');
  map.addLayer(newMarker);
  socket.emit('userCoordinates', e.latlng);
});

// socket new User connected
socket.on('newUserCoordinates', (coords) => {
  console.log(coords);
  const userIcon = L.icon({
    iconUrl: '/img/icon2.png',
    iconSize: [38, 42],
  })
  const newUserMarker = L.marker([coords.lat, coords.lng], {
    icon: userIcon 
  });
  newUserMarker.bindPopup('Nueva Entrega de Medicamento a Domicilio');
  map.addLayer(newUserMarker);
}); 

map.addLayer(tile);

