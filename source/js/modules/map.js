let map = document.querySelector('.contacts__map');

export const initialMap = () => {
  const mapOptions = {
    center: [55.774836, 37.632664],
    zoom: 10,
  };
  // eslint-disable-next-line
  map = new L.map('map', mapOptions);
  // eslint-disable-next-line
  const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

  map.addLayer(layer);
  // eslint-disable-next-line
  L.marker([55.774836, 37.632664]).addTo(map);
};
