/* eslint-disable max-len */
function mapInit() {
  const mymap = L.map('mapid').setView([38.98, -76.93], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWVsaTAxIiwiYSI6ImNrbTZ0cW9idjByZ2YycHVzcGVreXFjZXUifQ.pz0ZvuXltg88sWbXeo33ag'
  }).addTo(mymap);
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  const searchForm = document.querySelector('#search-form');
  const search = document.querySelector('#search');
  const targetList = document.querySelector('.target-list');

  const request = await fetch('/api');
  const data = await request.json();

  searchForm.addEventListener('submit', async (event) => {
  // targetList.innerText == ''
    event.preventDefault();
    console.log('form submitted');
    const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
    console.table(filtered);

    filtered.forEach((item) => {
      const longLat = item.geocoded_column_1.coordinates;
      console.log('markerLongLat', longLat[1], longLat[0]);
      const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);

      const appendItem = document.createElement('li');
      appendItem.classList.add('block');
      appendItem.classList.add('list-item');
      appendItem.innerHTML = `<div class='list-header is-size-5 is-primary'> ${item.name}
              </div>
              <address class='s-size-6'>${item.address_line_1} </br> ${item.zip}</address>`;
      targetList.append(appendItem);
    });
  });
//   // use your assignment 1 data handling code here sorting and search code
//   // and target mapObjectFromFunction to attach markers
}

async function windowActions() {
  const mymap = mapInit();
  await dataHandler(mymap);
}

window.onload = windowActions;