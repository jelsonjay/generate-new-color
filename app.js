'use strict';

const boxColor = document.querySelectorAll('.box h3');
const btn = document.querySelector('.btn');
//console.log(boxColor)

function generateColors() {
	boxColor.forEach(color => {
		let hexCode = '#' + Math.random().toString(16).substring(2, 8);
		color.style.backgroundColor = hexCode;
		color.innerHTML = hexCode;

		//console.log(hexCode);
	});
}

generateColors();

btn.addEventListener('click', () => {
	generateColors();
});
