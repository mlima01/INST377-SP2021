function mapInit() {
  const mymap = L.map('mapid').setView([51.505, -0.09], 13);
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

async function dataHandler(mymap) {
  // use your assignment 1 data handling code here sorting and search code
  // and target mapObjectFromFunction to attach markers
  const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
  const request = await fetch(endpoint);
  const restaurants = await request.json();

  function findMatches(zipToMatch, restaurants) {
    return restaurants.filter((place) => {
      const regex = new RegExp(zipToMatch, 'gi');
      return place.zip.match(regex) || place.name.match(regex) || place.category.match(regex);
    });
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, restaurants);
    const html = matchArray.map((place) => {
      const regex = RegExp(event.target.value, 'g');
      const restName = place.name.replace(regex, `<span class="hl">${event.target.value}</span>`);
      // const restZip = place.zip.replace(regex, `<span class="hl">${event.target.value}</span>`);
      return `
            <li class="box is-primary">
                <span class="name">${restName}</span></br>
                <span class="category">${place.category}</span></br>
                <span class="address">${place.address_line_1} </span></br>
                <span class="address">${place.state} </span>
                <span class="address">${place.zip} </span>
            </li>
            `;
    }).join('');
    control.innerHTML = html;
  }

  const searchInput = document.querySelector('.label');
  const control = document.querySelector('.control');
  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

async function windowActions() {
  const mymap = mapInit();
  await dataHandler(mymap);
}

window.onload = windowActions;