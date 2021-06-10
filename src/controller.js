//module - interaction
const initializeControl = (function () {
	//submit name of the city
	const submitCity = async (event) => {
		event.preventDefault();
		const newCityInput = document.querySelector('[data-search-city-input]');
		const cityName = newCityInput.value;
		if (cityName == null || cityName === '') return;
		newCityInput.value = null;
		//search the
		const dataCity = await getLatAndLon(cityName);

		//get the lat and the lon of the city
		const forecastCity = await getForecast(
			dataCity.coord.lat,
			dataCity.coord.lon
		);
		//console.log(forecastCity);
		//console.log(dataCity);
		setCityInfo(dataCity.name, forecastCity);
	};

	//get data of the city from the weather api
	const getLatAndLon = async (city) => {
		try {
			const location = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&lang=ja&APPID=1cb9e5f573b458ac716c37894169b7cd`;
			const response = await fetch(location, { mode: 'cors' });
			if (!response.ok) throw new Error(`City ${city} not found`);
			const weatherDataCity = await response.json();
			// console.log(weatherDataCity);
			return weatherDataCity;
		} catch (error) {
			alert(error);
		}
	};

	//get forecast of the city from the weather api
	const getForecast = async (lat, lon) => {
		try {
			const location = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&lang=ja&appid=1cb9e5f573b458ac716c37894169b7cd`;
			const response = await fetch(location, { mode: 'cors' });
			const forecastDataCity = await response.json();
			// console.log(forecastDataCity);
			const data = convertData(forecastDataCity);
			return data;
		} catch (error) {
			alert(error);
		}
	};

	//convert the data of the city and return an object
	const convertData = (data) => {
		const objectCity = {
			// date: data.daily[0].dt,
			date: getLocalTime(data.timezone_offset),
			temp: Math.round(data.current.temp * 10) / 10,
			icon: data.current.weather[0].icon,
			feels: Math.round(data.current.feels_like * 10) / 10,
			humidity: data.current.humidity,
			rain: Math.round(data.daily[0].pop * 10) / 10,
			wind: Math.round(data.current.wind_speed * 10) / 10,

			daily: [
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 24,
					max_temp: Math.round(data.daily[1].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[1].temp.min * 10) / 10,
					icon: data.daily[1].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 48,
					max_temp: Math.round(data.daily[2].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[2].temp.min * 10) / 10,
					icon: data.daily[2].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 72,
					max_temp: Math.round(data.daily[3].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[3].temp.min * 10) / 10,
					icon: data.daily[3].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 96,
					max_temp: Math.round(data.daily[4].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[4].temp.min * 10) / 10,
					icon: data.daily[4].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 120,
					max_temp: Math.round(data.daily[5].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[5].temp.min * 10) / 10,
					icon: data.daily[5].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 144,
					max_temp: Math.round(data.daily[6].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[6].temp.min * 10) / 10,
					icon: data.daily[6].weather[0].icon,
				},
				{
					day: getLocalTime(data.timezone_offset) + 1000 * 3600 * 168,
					max_temp: Math.round(data.daily[7].temp.max * 10) / 10,
					min_temp: Math.round(data.daily[7].temp.min * 10) / 10,
					icon: data.daily[7].weather[0].icon,
				},
			],
		};
		return objectCity;
	};

	//set the display of the city's information
	const setCityInfo = (name, cityInfo) => {
		//reset disabled button
		const celsiusButton = document.querySelector('[data-celsius-button]');
		const fahrenheitButton = document.querySelector('[data-fahrenheit-button]');
		celsiusButton.disabled = true;
		fahrenheitButton.disabled = false;
		//city container
		const cityDisplayContainer = document.querySelector(
			'[data-city-display-container]'
		);
		cityDisplayContainer.classList.add('display-ok');
		//animation
		cityDisplayContainer.classList.add('appear-right');
		setTimeout(function () {
			cityDisplayContainer.classList.remove('appear-right');
		}, 500);

		const cityTitleEl = document.querySelector('[data-city-title]');
		//console.log(name.length);
		if (name.length >= 20) {
			cityTitleEl.style.fontSize = '1.5rem';
			cityTitleEl.innerText = name;
		} else if (name.length < 20) {
			cityTitleEl.innerText = name;
		}
		const cityTempEl = document.querySelector('[data-city-temperature]');
		cityTempEl.innerHTML = `<span data-main-t>${cityInfo.temp}</span> <span data-unit-t>°C</span>`;
		const cityIconTempEl = document.querySelector(
			'[data-city-icon-temperature]'
		);
		cityIconTempEl.innerHTML = convertTextToIcon(cityInfo.icon);
		const cityDateEl = document.querySelector('[data-city-date]');
		//day and time
		cityDateEl.innerHTML = `<i class="fas fa-calendar-day"></i> <span class="day-city">${new Date(
			cityInfo.date
		).toLocaleString('ja-JP', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
		})}</span> <i class="far fa-clock"></i> <span class="time-city">${new Date(
			cityInfo.date
		).toLocaleString('ja-JP', {
			hour: '2-digit',
			minute: '2-digit',
		})}</span>`;

		const cityFeelsEl = document.querySelector('[data-city-feels]');
		cityFeelsEl.innerHTML = `<span data-feels-t>${cityInfo.feels}</span> <span data-unit-t>°C</span>`;
		const cityHumidityEl = document.querySelector('[data-city-humidity]');
		cityHumidityEl.innerText = `${cityInfo.humidity} %`;
		const cityRainEl = document.querySelector('[data-city-rain]');
		cityRainEl.innerText = `${cityInfo.rain} %`;
		const cityWindEl = document.querySelector('[data-city-wind]');
		cityWindEl.innerHTML = `<span data-speed>${cityInfo.wind}</span> <span data-speed-unit>km/h</span>`;

		//daily container
		const dailyDisplayContainer = document.querySelector(
			'[data-daily-display-container]'
		);
		dailyDisplayContainer.classList.add('display-ok');
		//animation
		dailyDisplayContainer.classList.add('appear-right');
		setTimeout(function () {
			dailyDisplayContainer.classList.remove('appear-right');
		}, 500);
		clearElement(dailyDisplayContainer);
		cityInfo.daily.forEach((day, index) => {
			const dayEl = document.createElement('div');
			dayEl.classList.add('daily-body');
			dayEl.innerHTML = `
                <h2 class="day">${new Date(day.day).toLocaleString('ja-JP', {
									weekday: 'short',
								})}</h2>
                <div class="max-temp" data-max-temp><span data-max-t>${
									day.max_temp
								}</span> <span data-max-unit-t>°C</span></div>
                <div class="min-temp" data-min-temp><span data-min-t>${
									day.min_temp
								}</span> <span data-min-unit-t>°C</span></div>
                <div class="icon-temp">${convertTextToIcon(day.icon)}</div>
            `;
			dailyDisplayContainer.appendChild(dayEl);
		});
	};

	//convert celsius to fahrenheit
	const convertCtoF = (event) => {
		//console.log(event.target);
		const celsiusButton = document.querySelector('[data-celsius-button]');
		const fahrenheitButton = document.querySelector('[data-fahrenheit-button]');
		celsiusButton.disabled = false;
		fahrenheitButton.disabled = true;

		//city temp
		const temp = document
			.querySelector('[data-city-temperature]')
			.querySelector('[data-main-t]');
		const convertedTemp = Math.round((temp.innerText * (9 / 5) + 32) * 10) / 10;
		temp.innerText = convertedTemp;
		const unit = document
			.querySelector('[data-city-temperature]')
			.querySelector('[data-unit-t]');
		unit.innerText = '°F';

		//city feels like
		const tempFeels = document
			.querySelector('[data-city-feels]')
			.querySelector('[data-feels-t]');
		const convertedTempFeels =
			Math.round((tempFeels.innerText * (9 / 5) + 32) * 10) / 10;
		tempFeels.innerText = convertedTempFeels;
		const unitFeels = document
			.querySelector('[data-city-feels]')
			.querySelector('[data-unit-t]');
		unitFeels.innerText = '°F';

		//city wind speed
		const speed = document
			.querySelector('[data-city-wind]')
			.querySelector('[data-speed]');
		const convertedSpeed = Math.round((speed.innerText / 1.609) * 100) / 100;
		speed.innerText = convertedSpeed;
		const speedUnit = document
			.querySelector('[data-city-wind]')
			.querySelector('[data-speed-unit]');
		speedUnit.innerText = 'mph';

		//forecast daily
		const dailyChilds = document
			.querySelector('[data-daily-display-container]')
			.querySelectorAll('.daily-body');

		for (let i = 0; i < dailyChilds.length; i++) {
			let childDiv = dailyChilds[i];
			//max temp
			const maxTempDaily = childDiv.querySelector('[data-max-t]');
			const convertedMaxTempDaily =
				Math.round((maxTempDaily.innerText * (9 / 5) + 32) * 10) / 10;
			maxTempDaily.innerText = convertedMaxTempDaily;
			const maxUnitDaily = childDiv.querySelector('[data-max-unit-t]');
			maxUnitDaily.innerText = '°F';
			//min temp
			const minTempDaily = childDiv.querySelector('[data-min-t]');
			const convertedMinTempDaily =
				Math.round((minTempDaily.innerText * (9 / 5) + 32) * 10) / 10;
			minTempDaily.innerText = convertedMinTempDaily;
			const minUnitDaily = childDiv.querySelector('[data-min-unit-t]');
			minUnitDaily.innerText = '°F';
		}
	};

	//convert fahrenheit to fahrenheit
	const convertFtoC = (event) => {
		//console.log(event.target);
		const fahrenheitButton = document.querySelector('[data-fahrenheit-button]');
		const celsiusButton = document.querySelector('[data-celsius-button]');
		fahrenheitButton.disabled = false;
		celsiusButton.disabled = true;

		//city temp
		const temp = document
			.querySelector('[data-city-temperature]')
			.querySelector('[data-main-t]');
		const convertedTemp =
			Math.round((((temp.innerText - 32) * 5) / 9) * 10) / 10;
		temp.innerText = convertedTemp;
		const unit = document
			.querySelector('[data-city-temperature]')
			.querySelector('[data-unit-t]');
		unit.innerText = '°C';

		//city feels like
		const tempFeels = document
			.querySelector('[data-city-feels]')
			.querySelector('[data-feels-t]');
		const convertedTempFeels =
			Math.round((((tempFeels.innerText - 32) * 5) / 9) * 10) / 10;
		tempFeels.innerText = convertedTempFeels;
		const unitFeels = document
			.querySelector('[data-city-feels]')
			.querySelector('[data-unit-t]');
		unitFeels.innerText = '°C';

		//city wind speed
		const speed = document
			.querySelector('[data-city-wind]')
			.querySelector('[data-speed]');
		const convertedSpeed = Math.round(speed.innerText * 1.609 * 100) / 100;
		speed.innerText = convertedSpeed;
		const speedUnit = document
			.querySelector('[data-city-wind]')
			.querySelector('[data-speed-unit]');
		speedUnit.innerText = 'km/h';

		//forecast daily
		const dailyChilds = document
			.querySelector('[data-daily-display-container]')
			.querySelectorAll('.daily-body');

		for (let i = 0; i < dailyChilds.length; i++) {
			let childDiv = dailyChilds[i];
			//max temp
			const maxTempDaily = childDiv.querySelector('[data-max-t]');
			const convertedMaxTempDaily =
				Math.round((((maxTempDaily.innerText - 32) * 5) / 9) * 10) / 10;
			maxTempDaily.innerText = convertedMaxTempDaily;
			const maxUnitDaily = childDiv.querySelector('[data-max-unit-t]');
			maxUnitDaily.innerText = '°C';
			//min temp
			const minTempDaily = childDiv.querySelector('[data-min-t]');
			const convertedMinTempDaily =
				Math.round((((minTempDaily.innerText - 32) * 5) / 9) * 10) / 10;
			minTempDaily.innerText = convertedMinTempDaily;
			const minUnitDaily = childDiv.querySelector('[data-min-unit-t]');
			minUnitDaily.innerText = '°C';
		}
	};

	//convert temp to icon
	const convertTextToIcon = (logoText) => {
		if (logoText === '01d' || logoText === '01n') {
			return `<i class="fas fa-sun"></i>`;
		} else if (logoText === '02d' || logoText === '02n') {
			return `<i class="fas fa-cloud-sun"></i>`;
		} else if (logoText === '03d' || logoText === '03n') {
			return `<i class="fas fa-cloud"></i>`;
		} else if (logoText === '04d' || logoText === '04n') {
			// return `<i class="fas fa-cloud"></i> <div class="second-cloud"><i class="fas fa-cloud"></i></div>`;
			return `<i class="fas fa-cloud"></i>`;
		} else if (logoText === '09d' || logoText === '09n') {
			return `<i class="fas fa-cloud-rain"></i>`;
		} else if (logoText === '10d' || logoText === '10n') {
			// return `<i class="fas fa-cloud-showers-heavy"></i> <div class="second-cloud-shower"><i class="fas fa-cloud"></i></div>`;
			return `<i class="fas fa-cloud-showers-heavy"></i>`;
		} else if (logoText === '11d' || logoText === '11n') {
			return `<i class="fas fa-poo-storm"></i>`;
		} else if (logoText === '13d' || logoText === '13n') {
			return `<i class="fas fa-snowflake"></i>`;
		} else if (logoText === '50d' || logoText === '50n') {
			return `<i class="fas fa-smog"></i>`;
		}
	};

	//clear elements in daily container
	const clearElement = (element) => {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	};

	// local time
	const getLocalTime = (data) => {
		let date = new Date();
		let time = date.getTime();
		let localOffset = date.getTimezoneOffset() * 60000;
		let utc = time + localOffset;
		let localTime = utc + 1000 * data;
		// let localTimeDate = new Date(localTime);
		// let options = {
		// 	weekday: 'short',
		// 	year: 'numeric',
		// 	month: 'long',
		// 	day: 'numeric',
		// 	hour: '2-digit',
		// 	minute: '2-digit',
		// 	second: '2-digit',
		// };
		// return localTimeDate.toLocaleString('en-US', options);
		return localTime;
	};

	return {
		submitCity,
		getLatAndLon,
		convertCtoF,
		convertFtoC,
	};
})();

export default initializeControl;
