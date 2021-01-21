import './style/style.css';

const clearDiv = function (div) {
	while (div.childNodes.length !== 0) {
		div.removeChild(div.lastChild);
	}
};

const formateTime = function (time, offset) {
	let date = new Date(time * 1000);
	let s = date.getTimezoneOffset();
	let hours = date.getHours() + s / 60 + offset / 3600;
	console.log(hours);
	if (hours < 0) {
		hours = 24 + hours;
	}
	let minutes = '0' + date.getMinutes();
	let seconds = '0' + date.getSeconds();
	console.log(hours + ' 123');
	let formattedTime =
		hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return formattedTime;
};

const createCard = function (data) {
	const cityP = document.getElementById('city');
	const tempP = document.getElementById('temp');
	const humidityP = document.getElementById('humidity');
	const visibilityP = document.getElementById('visibility');
	const flag = document.getElementById('flag');
	const sunrP = document.getElementById('sunr');
	const sunsP = document.getElementById('suns');

	cityP.textContent = data.name;
	tempP.textContent = Math.floor(data.main.temp);
	humidityP.textContent = data.main.humidity;
	visibilityP.textContent = data.visibility / 1000 + 'km';
	flag.src = `https://www.countryflags.io/${data.sys.country}/flat/64.png`;
	sunrP.textContent =
		'Sunrise   ' + formateTime(data.sys.sunrise, data.timezone);
	sunsP.textContent = 'Sunset   ' + formateTime(data.sys.sunset, data.timezone);
};

export { createCard };

/**const formateTime = function (time) {
	let date = new Date(time * 1000);
	date.toLocaleString();
	let hours = date.getHours();
	let minutes = '0' + date.getMinutes();
	let seconds = '0' + date.getSeconds();
	let formattedTime =
		hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
	return formattedTime;
}; */
