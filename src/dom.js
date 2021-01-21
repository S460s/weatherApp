import './style/style.css';
let hrs = 0;
const clearDiv = function (div) {
	while (div.childNodes.length !== 0) {
		div.removeChild(div.lastChild);
	}
};

const localTimeEvent = function () {
	const localTimeP = document.getElementById('localTime');
	let date = new Date();
	let minutes = ('0' + date.getMinutes()).substr(-2);
	let seconds = ('0' + date.getSeconds()).substr(-2);
	let offset = date.getTimezoneOffset();
	let hours = date.getHours() + offset / 60 + hrs / 3600;
	if (Math.floor(hours) !== hours) {
		minutes = Number(minutes) + (hours - Math.floor(hours)) * 60;
		hours = Math.floor(hours);
		if (minutes > 60) {
			hours += 1;
			minutes -= 60;
		}
	}
	if (hours < 0) {
		hours = 24 + hours;
	}
	let formattedTime = hours + ':' + minutes + ':' + seconds;
	localTimeP.textContent = 'Local time: ' + formattedTime;
};

const formateTime = function (time) {
	let date = new Date(time * 1000);
	let minutes = ('0' + date.getMinutes()).substr(-2);
	let seconds = ('0' + date.getSeconds()).substr(-2);
	let offset = date.getTimezoneOffset();
	let hours = date.getHours() + offset / 60 + hrs / 3600;
	if (Math.floor(hours) !== hours) {
		minutes = Number(minutes) + (hours - Math.floor(hours)) * 60;
		hours = Math.floor(hours);
		if (minutes > 60) {
			hours += 1;
			minutes -= 60;
		}
	}
	if (hours < 0) {
		hours = 24 + hours;
	}
	let formattedTime = hours + ':' + minutes + ':' + seconds;
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
	hrs = data.timezone;
	sunrP.textContent = 'Sunrise   ' + formateTime(data.sys.sunrise);
	sunsP.textContent = 'Sunset   ' + formateTime(data.sys.sunset);
	localTimeEvent();
	setInterval(localTimeEvent, 1000);
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
