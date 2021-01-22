import './style/style.css';
import { createCard, switchCF } from './dom.js';
const WEATHER_API_KEY = '0a4f4a6eecd2d2972049aaf3d53317b8';
const GIPHY_API_KEY = 'CtWKWgDFEoAZdObMpNzJngDXDmiTvo4q';
const form = document.querySelector('form');
const searchBar = document.getElementById('searchBar');
const giphy = document.getElementById('giphy');
const errP = document.getElementById('errP');

function validateForm(flag) {
	if (flag) {
		errP.style.display = 'none';
	} else {
		errP.style.display = 'block';
	}
}

async function showGiphy(topic) {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${topic}`,
		{ mode: 'cors' }
	);
	try {
		const giphyData = await response.json();
		giphy.src = giphyData.data.images.original.url;
	} catch (err) {
		console.log(err.message);
	}
}

async function getWeather(location) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=${WEATHER_API_KEY}&units=metric`,
		{ mode: 'cors' }
	);
	validateForm(response.ok);
	if (!response.ok) {
		console.log('Response was not ok.');
	} else {
		const data = await response.json();
		createCard(data);
		switchCF(data);
		showGiphy(data.weather[0].main);
	}
}

function searchEvent() {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		getWeather(searchBar.value);
		form.reset();
	});
}
getWeather('Pernik');
searchEvent();
