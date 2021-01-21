import './style/style.css';
import { createCard } from './dom.js';
const API_KEY = '0a4f4a6eecd2d2972049aaf3d53317b8';
const form = document.querySelector('form');
const searchBar = document.getElementById('searchBar');

async function getWeather(location) {
	const response = await fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${location},&APPID=${API_KEY}`,
		{ mode: 'cors' }
	);
	if (!response.ok) {
		console.log('Err');
	} else {
		const data = await response.json();
		createCard(data);
		console.log(data);
	}
}

function searchEvent() {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		getWeather(searchBar.value);
		form.reset();
	});
}

searchEvent();
