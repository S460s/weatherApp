import './style/style.css';
const infoSection = document.getElementById('infoSection');
const clearDiv = function (div) {
	while (div.childNodes.length !== 0) {
		div.removeChild(div.lastChild);
	}
};

const createCard = function (data) {
	clearDiv(infoSection);
	let a = document.createElement('p');
	a.textContent = data.name;
	infoSection.appendChild(a);
};

export { createCard };
