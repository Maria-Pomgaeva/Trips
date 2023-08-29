const mapContainer = document.querySelector('.map');

export const initMap = function () {
  if (!mapContainer) {
    return;
  }

  const mapBlock = mapContainer ? mapContainer.querySelector('[data-map]') : null;
  const lMap = window.L;

  let map = lMap.map(mapBlock, {
    center: [55.77521807444495, 37.632742820550725],
    zoom: 20,
    scrollWheelZoom: false,
  });

  lMap.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let myIcon = lMap.icon({
    className: 'map__pin',
    iconUrl: './img/svg/map-pin.svg',
    iconSize: [48, 48],
    popupAnchor: [0, -20],
  });

  lMap.marker([55.77521807444495, 37.632742820550725], {
    icon: myIcon,
  }).addTo(map).bindPopup('г. Москва, пр-т Мира, д. 14, офис 101');
};
