/*Filter Rekdavid modra*/

function FilterTeszt(){
    alert("AAAAAAAAAAAA")
}

/** Default config */
const rangeSlider_min = 30;
const rangeSlider_max = 60;

document.querySelector('#RangeSlider .range-slider-val-left').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;
document.querySelector('#RangeSlider .range-slider-val-right').style.width = `${rangeSlider_min + (100 - rangeSlider_max)}%`;
 
document.querySelector('#RangeSlider .range-slider-val-range').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-val-range').style.right = `${(100 - rangeSlider_max)}%`;

document.querySelector('#RangeSlider .range-slider-handle-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-handle-right').style.left = `${rangeSlider_max}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left').style.left = `${rangeSlider_min}%`;
document.querySelector('#RangeSlider .range-slider-tooltip-right').style.left = `${rangeSlider_max}%`;

document.querySelector('#RangeSlider .range-slider-tooltip-left .range-slider-tooltip-text').innerText = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-tooltip-right .range-slider-tooltip-text').innerText = rangeSlider_max;

document.querySelector('#RangeSlider .range-slider-input-left').value = rangeSlider_min;
document.querySelector('#RangeSlider .range-slider-input-left').addEventListener( 'input', e => {
	e.target.value = Math.min(e.target.value, e.target.parentNode.childNodes[5].value - 1);
	var value = (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / (parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min);

	var children = e.target.parentNode.childNodes[1].childNodes;
	children[1].style.width = `${value}%`;
	children[5].style.left = `${value}%`;
	children[7].style.left = `${value}%`;
	children[11].style.left = `${value}%`;

	children[11].childNodes[1].innerHTML = e.target.value;
});

document.querySelector('#RangeSlider .range-slider-input-right').value = rangeSlider_max;
document.querySelector('#RangeSlider .range-slider-input-right').addEventListener( 'input', e => {
	e.target.value = Math.max(e.target.value, e.target.parentNode.childNodes[3].value - (-1));
	var value = (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.value) - (100 / ( parseInt(e.target.max) - parseInt(e.target.min) )) * parseInt(e.target.min);

	var children = e.target.parentNode.childNodes[1].childNodes;
	children[3].style.width = `${100-value}%`;
	children[5].style.right = `${100-value}%`;
	children[9].style.left = `${value}%`;
	children[13].style.left = `${value}%`;

	children[13].childNodes[1].innerHTML = e.target.value;
});

	//foMobil
	document.querySelector('.hamburger').addEventListener('click', () => {
	const h = document.getElementById('mobilMenu');
	const hamburger = document.querySelector('.hamburger');
	const mobilMenu = document.querySelector('.mobilTartalom');
  
	h.style.display = (h.style.display === 'flex') ? 'none' : 'flex';
  
	hamburger.classList.toggle('open');
	mobilMenu.classList.toggle('visible');
  
	console.log(hamburger.classList.contains('open'));
  });
  //aloldalak
  document.querySelector('.hamburgerAloldal').addEventListener('click', () => {
	const hAloldal = document.getElementById('dropdownMobil');
	const hamburgerAloldal = document.querySelector('.hamburgerAloldal');
  
	hAloldal.style.display = (hAloldal.style.display === 'block') ? 'none' : 'block';
  
	hamburgerAloldal.classList.toggle('open');
  
	console.log(hamburger.classList.contains('open'));
  });

