//Module - layout app
const initializeDOM = (function () {
	const createHeader = () => {
		const header = document.createElement('div');
		header.innerHTML = `<i class="fas fa-cloud-sun"></i> 天気アプリ`;
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
                    maxlength="30"
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
                    <h3><i class="fas fa-thermometer-half"></i> のような感じ</h3>
                    <p data-city-feels></p>
                </div>
                <div class="info-city"> 
                    <h3><i class="fas fa-water"></i> 湿度</h3>
                    <p data-city-humidity></p>
                </div>
                <div class="info-city">
                    <h3><i class="fas fa-cloud-rain"></i> 雨</h3>
                    <p data-city-rain></p>
                </div>
                <div class="info-city">
                    <h3><i class="fas fa-wind"></i> 風速</h3>
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
