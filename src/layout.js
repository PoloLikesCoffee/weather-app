//Module - layout app
const initializeDOM = (function () {
	const createHeader = () => {
		const header = document.createElement('div');
		header.innerHTML = `<i class="fas fa-cloud-sun"></i> Weather App`;
		header.classList.add('header');

		return header;
	};

	const createSearchContainer = () => {
		const searchContainer = document.createElement('div');
		searchContainer.classList.add('search-container');

		searchContainer.innerHTML = `
        <h2 class="city-search-title"><i class="far fa-hand-point-right"></i> ...の天気は? <i class="far fa-hand-point-down"></i></h2>
            <form action="" data-search-form>
                <input 
                    type="text" 
                    class="new city"
                    maxlength="20"
                    data-search-city-input
                    placeholder="新しい都市名"
                    aria-label="search city name"
                />
                <button class="btn search" aria-label="search city"><i class="fas fa-search-location"></i></button>
            </form>
        `;

		return searchContainer;
	};

	const createCityContainer = () => {
		const cityContainer = document.createElement('div');
		cityContainer.classList.add('city-container');
		cityContainer.setAttribute('data-city-display-container', '');

		cityContainer.innerHTML = `
            <div class="city-header">
                <h2 class="city-title" data-city-title></h2>
                <h2 class="city-temperature" data-city-temperature></h2>
                <div class="icon-temperature" data-city-icon-temperature></div>
                <div class="date-container">
                    <p class="city-date" data-city-date></p>
                    <span class="triangle"></span>
                </div>
            </div>

            <div class="city-body">
                <div class="info-city"> 
                    <h3><i class="fas fa-thermometer-half"></i> Feels Like</h3>
                    <p data-city-feels></p>
                </div>
                <div class="info-city"> 
                    <h3><i class="fas fa-water"></i> Humidity</h3>
                    <p data-city-humidity></p>
                </div>
                <div class="info-city">
                    <h3><i class="fas fa-cloud-rain"></i> Chance of Rain</h3>
                    <p data-city-rain></p>
                </div>
                <div class="info-city">
                    <h3><i class="fas fa-wind"></i> Wind Speed</h3>
                    <p data-city-wind></p>
                </div>
            </div>

            <div class="degree-stuff">
                <button class="btn degree" data-fahrenheit-button><i class="fas fa-temperature-high"></i> Fahrenheit</button>
                <button class="btn degree" data-celsius-button><i class="fas fa-temperature-low"></i> Celsius</button>
            </div>
        `;
		return cityContainer;
	};

	const createDailyCityContainer = () => {
		const dailyContainer = document.createElement('div');
		dailyContainer.classList.add('daily-container');
		dailyContainer.setAttribute('data-daily-display-container', '');

		// dailyContainer.innerHTML = `
		//     <div class="daily-body" data-day1>
		//         <h2 class="day">Thrusday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">13 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day2>
		//         <h2 class="day">Friday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">13 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day3>
		//         <h2 class="day">Saturday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">9 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day4>
		//         <h2 class="day">Sunday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">14 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day5>
		//         <h2 class="day">Monday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">13 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day6>
		//         <h2 class="day">Tuesday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">13 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		//     <div class="daily-body" data-day7>
		//         <h2 class="day">Wednesday</h2>
		//         <div class="max-temp">17 °C</div>
		//         <div class="min-temp">13 °C</div>
		//         <div class="icon-temp"><i class="fas fa-cloud-sun"></i></div>
		//     </div>
		// `;

		return dailyContainer;
	};

	const createHourlyCityContainer = () => {};

	const createLayout = () => {
		const content = document.getElementById('content');

		content.append(
			createHeader(),
			createSearchContainer(),
			createCityContainer(),
			createDailyCityContainer()
		);
	};

	return {
		createLayout,
	};
})();

export default initializeDOM;
