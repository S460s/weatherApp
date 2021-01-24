import GitHubIcon from './img/GitHubIcon.png';

let hrs = 0;
const card = document.getElementById('card');
const localTimeP = document.getElementById('localTime');
const cityP = document.getElementById('city');
const tempP = document.getElementById('temp');
const humidityP = document.getElementById('humidity');
const visibilityP = document.getElementById('visibility');
const flag = document.getElementById('flag');
const sunrP = document.getElementById('sunr');
const sunsP = document.getElementById('suns');
const tempSwitch = document.getElementById('temperature');
const root = document.documentElement;
const errP = document.getElementById('errP');
const ghImg = document.getElementById('ghIcon');
const weatherIcon = document.getElementById('weatherIcon');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');

const pressure = document.getElementById('pressure');
const myMAP = document.getElementById('myMAP');
function setIcon() {
	ghImg.src = GitHubIcon;
}

function validateForm(flag) {
	if (flag) {
		errP.style.display = 'none';
	} else {
		errP.style.display = 'block';
	}
}

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
		tempP.textContent = `Temperature: ${Math.floor(
			data.main.temp * 1.8 + 32
		)}°F`;
		minTemp.textContent = `Min Temperature: ${Math.floor(
			data.main.temp_min * 1.8 + 32
		)}°F`;
		maxTemp.textContent = `Max Temperature: ${Math.floor(
			data.main.temp_max * 1.8 + 32
		)}°F`;
	} else {
		tempP.textContent = `Temperature ${data.main.temp}°C`;
		minTemp.textContent = `Min Temperature ${data.main.temp_min}°C`;
		maxTemp.textContent = `Max Temperature ${data.main.temp_max}°C`;
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
		root.style.setProperty('--bgColor', '#081b45');
		root.style.setProperty('--colorM', ' #51c2d5');
		root.style.setProperty('--textColor', '#5cd7ec');
		root.style.setProperty('--btnBg', ' #0b525b');
		root.style.setProperty('--light', ' #222b7c');
		root.style.setProperty('--medium', '#0d2029');
		root.style.setProperty('--slide', '#1d3557');
		root.style.setProperty('--btnTxt', '#51c2d5');
		myMAP.classList.add('dark');
	} else {
		root.style.setProperty('--bgColor', '#f58634');
		root.style.setProperty('--colorM', ' #142850');
		root.style.setProperty('--textColor', '#010514');
		root.style.setProperty('--btnBg', ' #2196f3');
		root.style.setProperty('--light', ' white');
		root.style.setProperty('--medium', 'rgb(228, 227, 227)');
		root.style.setProperty('--btnTxt', 'white');
		myMAP.classList.remove('dark');
	}
};

const setWeatherIcon = function (code) {
	weatherIcon.src = `https://openweathermap.org/img/wn/${code}@2x.png`;
};

const createCard = function (data) {
	card.style.display = 'flex';
	setWeatherIcon(data.weather[0].icon);
	cityP.textContent = data.name;
	tempP.textContent = `Temperature: ${data.main.temp}°C`;
	maxTemp.textContent = `Max Temperature: ${data.main.temp_max}°C`;
	minTemp.textContent = `Min Temperature: ${data.main.temp_min}°C`;

	humidityP.textContent = `Humidity: %${data.main.humidity}`;
	visibilityP.textContent = `Visibility: ${data.visibility / 1000}km`;
	pressure.textContent = `Pressure: ${data.main.pressure}`;

	flag.src = `https://www.countryflags.io/${data.sys.country}/flat/64.png`;
	hrs = data.timezone;
	sunrP.textContent = 'Sunrise: ' + formateTime(data.sys.sunrise);
	sunsP.textContent = 'Sunset: ' + formateTime(data.sys.sunset);
	localTimeP.textContent = 'Local time: ' + formateTime();

	setInterval(() => {
		localTimeP.textContent = 'Local time: ' + formateTime();
	}, 1000);
};

export { formateTime, checkDates, createCard, switchCF, validateForm, setIcon };
