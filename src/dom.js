import './style/style.css';
let hrs = 0;
const localTimeP = document.getElementById('localTime');
const cityP = document.getElementById('city');
const tempP = document.getElementById('temp');
const humidityP = document.getElementById('humidity');
const visibilityP = document.getElementById('visibility');
const flag = document.getElementById('flag');
const sunrP = document.getElementById('sunr');
const sunsP = document.getElementById('suns');
const tempSwitch = document.getElementById('temperature');
const tempLabel = document.getElementById('tempLabel');
const root = document.documentElement;

const formateTime = function (time) {
	let date;
	if (time) {
		date = new Date(time * 1000);
	} else {
		date = new Date();
	}
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
	} else if (hours > 24) {
		hours = -24 + hours;
	}
	let formattedTime = hours + ':' + minutes + ':' + seconds;
	return formattedTime;
};

const handleSwitchCF = function (data) {
	if (tempSwitch.checked) {
		tempP.textContent = `Temperature ${Math.floor(
			Math.floor(data.main.temp) * 1.8 + 32
		)}°F`;
		tempLabel.textContent = '°F';
	} else {
		tempP.textContent = `Temperature ${Math.floor(data.main.temp)}°C`;
		tempLabel.textContent = '°C';
	}
};
const switchCF = function (data) {
	handleSwitchCF(data);
	tempSwitch.addEventListener('change', () => {
		handleSwitchCF(data);
	});
};

const checkDates = function (a, b, c) {
	a = a.replaceAll(':', '');
	b = b.replaceAll(':', '');
	c = c.replaceAll(':', '');
	if (Number(a) < Number(b) || Number(b) < Number(c)) {
		console.log(a, b);
		root.style.setProperty('--bgColor', '#142850');
		root.style.setProperty('--colorM', ' #a3c3e6');
	} else {
		root.style.setProperty('--bgColor', '#a3c3e6');
		root.style.setProperty('--colorM', ' #142850');
	}
};

const createCard = function (data) {
	cityP.textContent = data.name;
	tempP.textContent = `Temperature ${Math.floor(data.main.temp)}°C`;
	humidityP.textContent = `Humidity %${data.main.humidity}`;
	visibilityP.textContent = `Visibility ${data.visibility / 1000}km`;

	flag.src = `https://www.countryflags.io/${data.sys.country}/flat/64.png`;
	hrs = data.timezone;
	sunrP.textContent = 'Sunrise' + formateTime(data.sys.sunrise);
	sunsP.textContent = 'Sunset' + formateTime(data.sys.sunset);
	localTimeP.textContent = 'Local time: ' + formateTime();
	checkDates(
		formateTime(data.sys.sunset),
		formateTime(),
		formateTime(data.sys.sunrise)
	);

	setInterval(() => {
		localTimeP.textContent = 'Local time: ' + formateTime();
	}, 1000);
};

export { createCard, switchCF };
