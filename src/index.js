import L from 'mapbox.js';
import './style/style.css';
import {
	formateTime,
	checkDates,
	createCard,
	setIcon,
	switchCF,
	validateForm,
} from './dom.js';

const locationBtn = document.getElementById('getLocation');

const WEATHER_API_KEY = '0a4f4a6eecd2d2972049aaf3d53317b8';
const form = document.querySelector('form');
const searchBar = document.getElementById('searchBar');

L.mapbox.accessToken =
	'pk.eyJ1IjoiczQ2MCIsImEiOiJja2s4NWJ1bXIwaGUzMnZsbjhvNW93Y2Q3In0.fcqdAv0ALzTyx2d0o04J8A';
const map = L.mapbox
	.map('myMAP')
	.addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

const setMap = function (lat, log) {
	map.setView([lat, log], 9);
};

async function getWeather(location) {
	let response;
	if (typeof location === 'string') {
		response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=${WEATHER_API_KEY}&units=metric`,
			{ mode: 'cors' }
		);
	} else {
		console.log(location);
		response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]},&APPID=${WEATHER_API_KEY}&units=metric`,
			{ mode: 'cors' }
		);
	}
	validateForm(response.ok);
	if (!response.ok) {
		console.log('Response was not ok.');
	} else {
		const data = await response.json();
		console.log(data);
		createCard(data);
		checkDates(
			formateTime(data.sys.sunset),
			formateTime(),
			formateTime(data.sys.sunrise)
		);
		setMap(data.coord.lat, data.coord.lon);
		switchCF(data);
		//showGiphy(data.weather[0].main);
	}
}

function searchEvent() {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		getWeather(searchBar.value);
		searchBar.value = '';
	});
}

function geoSuccess(position) {
	let coordinates = [
		Math.round(position.coords.latitude),
		Math.round(position.coords.longitude),
	];
	getWeather(coordinates);
}

function getLocationEvent() {
	locationBtn.addEventListener('click', getLocation);
}

function getLocation() {
	navigator.geolocation.getCurrentPosition(geoSuccess);
}

getWeather('Pernik');
searchEvent();
setIcon();
getLocationEvent();
