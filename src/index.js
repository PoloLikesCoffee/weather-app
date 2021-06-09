import initializeDOM from './layout';
import initializeControl from './controller';

initializeDOM.createLayout();

//event listeners

const newCityForm = document.querySelector('[data-search-form]');
newCityForm.addEventListener('submit', initializeControl.submitCity);

const convertToFButton = document.querySelector('[data-fahrenheit-button]');
convertToFButton.addEventListener('click', initializeControl.convertCtoF);

const convertToCButton = document.querySelector('[data-celsius-button]');
convertToCButton.addEventListener('click', initializeControl.convertFtoC);
