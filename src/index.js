import './style/style.css';
import { createCard, switchCF } from './dom.js';
const API_KEY = '0a4f4a6eecd2d2972049aaf3d53317b8';
const GIPHY_API_KEY = 'CtWKWgDFEoAZdObMpNzJngDXDmiTvo4q';
const form = document.querySelector('form');
const searchBar = document.getElementById('searchBar');
const giphy = document.getElementById('giphy');

async function showGiphy(topic) {
	console.log(1);
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
		`https://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=${API_KEY}&units=metric`,
		{ mode: 'cors' }
	);
	if (!response.ok) {
		console.log('Err');
	} else {
		const data = await response.json();
		createCard(data);
		switchCF(data);
		showGiphy(data.weather[0].main);
		console.log(data.weather[0].main);
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
