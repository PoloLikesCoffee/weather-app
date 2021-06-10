/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//module - interaction\nconst initializeControl = (function () {\n\t//submit name of the city\n\tconst submitCity = async (event) => {\n\t\tevent.preventDefault();\n\t\tconst newCityInput = document.querySelector('[data-search-city-input]');\n\t\tconst cityName = newCityInput.value;\n\t\tif (cityName == null || cityName === '') return;\n\t\tnewCityInput.value = null;\n\t\t//search the\n\t\tconst dataCity = await getLatAndLon(cityName);\n\n\t\t//get the lat and the lon of the city\n\t\tconst forecastCity = await getForecast(\n\t\t\tdataCity.coord.lat,\n\t\t\tdataCity.coord.lon\n\t\t);\n\t\t//console.log(forecastCity);\n\t\t//console.log(dataCity);\n\t\tsetCityInfo(dataCity.name, forecastCity);\n\t};\n\n\t//get data of the city from the weather api\n\tconst getLatAndLon = async (city) => {\n\t\ttry {\n\t\t\tconst location = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&lang=ja&APPID=1cb9e5f573b458ac716c37894169b7cd`;\n\t\t\tconst response = await fetch(location, { mode: 'cors' });\n\t\t\tif (!response.ok) throw new Error(`City ${city} not found`);\n\t\t\tconst weatherDataCity = await response.json();\n\t\t\t// console.log(weatherDataCity);\n\t\t\treturn weatherDataCity;\n\t\t} catch (error) {\n\t\t\talert(error);\n\t\t}\n\t};\n\n\t//get forecast of the city from the weather api\n\tconst getForecast = async (lat, lon) => {\n\t\ttry {\n\t\t\tconst location = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&&lang=ja&appid=1cb9e5f573b458ac716c37894169b7cd`;\n\t\t\tconst response = await fetch(location, { mode: 'cors' });\n\t\t\tconst forecastDataCity = await response.json();\n\t\t\t// console.log(forecastDataCity);\n\t\t\tconst data = convertData(forecastDataCity);\n\t\t\treturn data;\n\t\t} catch (error) {\n\t\t\talert(error);\n\t\t}\n\t};\n\n\t//convert the data of the city and return an object\n\tconst convertData = (data) => {\n\t\tconst objectCity = {\n\t\t\t// date: data.daily[0].dt,\n\t\t\tdate: getLocalTime(data.timezone_offset),\n\t\t\ttemp: Math.round(data.current.temp * 10) / 10,\n\t\t\ticon: data.current.weather[0].icon,\n\t\t\tfeels: Math.round(data.current.feels_like * 10) / 10,\n\t\t\thumidity: data.current.humidity,\n\t\t\train: Math.round(data.daily[0].pop * 10) / 10,\n\t\t\twind: Math.round(data.current.wind_speed * 10) / 10,\n\n\t\t\tdaily: [\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 24,\n\t\t\t\t\tmax_temp: Math.round(data.daily[1].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[1].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[1].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 48,\n\t\t\t\t\tmax_temp: Math.round(data.daily[2].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[2].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[2].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 72,\n\t\t\t\t\tmax_temp: Math.round(data.daily[3].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[3].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[3].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 96,\n\t\t\t\t\tmax_temp: Math.round(data.daily[4].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[4].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[4].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 120,\n\t\t\t\t\tmax_temp: Math.round(data.daily[5].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[5].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[5].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 144,\n\t\t\t\t\tmax_temp: Math.round(data.daily[6].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[6].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[6].weather[0].icon,\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tday: getLocalTime(data.timezone_offset) + 1000 * 3600 * 168,\n\t\t\t\t\tmax_temp: Math.round(data.daily[7].temp.max * 10) / 10,\n\t\t\t\t\tmin_temp: Math.round(data.daily[7].temp.min * 10) / 10,\n\t\t\t\t\ticon: data.daily[7].weather[0].icon,\n\t\t\t\t},\n\t\t\t],\n\t\t};\n\t\treturn objectCity;\n\t};\n\n\t//set the display of the city's information\n\tconst setCityInfo = (name, cityInfo) => {\n\t\t//reset disabled button\n\t\tconst celsiusButton = document.querySelector('[data-celsius-button]');\n\t\tconst fahrenheitButton = document.querySelector('[data-fahrenheit-button]');\n\t\tcelsiusButton.disabled = true;\n\t\tfahrenheitButton.disabled = false;\n\t\t//city container\n\t\tconst cityDisplayContainer = document.querySelector(\n\t\t\t'[data-city-display-container]'\n\t\t);\n\t\tcityDisplayContainer.classList.add('display-ok');\n\t\t//animation\n\t\tcityDisplayContainer.classList.add('appear-right');\n\t\tsetTimeout(function () {\n\t\t\tcityDisplayContainer.classList.remove('appear-right');\n\t\t}, 500);\n\n\t\tconst cityTitleEl = document.querySelector('[data-city-title]');\n\t\t//console.log(name.length);\n\t\tif (name.length >= 20) {\n\t\t\tcityTitleEl.style.fontSize = '1.5rem';\n\t\t\tcityTitleEl.innerText = name;\n\t\t} else if (name.length < 20) {\n\t\t\tcityTitleEl.innerText = name;\n\t\t}\n\t\tconst cityTempEl = document.querySelector('[data-city-temperature]');\n\t\tcityTempEl.innerHTML = `<span data-main-t>${cityInfo.temp}</span> <span data-unit-t>°C</span>`;\n\t\tconst cityIconTempEl = document.querySelector(\n\t\t\t'[data-city-icon-temperature]'\n\t\t);\n\t\tcityIconTempEl.innerHTML = convertTextToIcon(cityInfo.icon);\n\t\tconst cityDateEl = document.querySelector('[data-city-date]');\n\t\t//day and time\n\t\tcityDateEl.innerHTML = `<i class=\"fas fa-calendar-day\"></i> <span class=\"day-city\">${new Date(\n\t\t\tcityInfo.date\n\t\t).toLocaleString('ja-JP', {\n\t\t\tweekday: 'long',\n\t\t\tmonth: 'long',\n\t\t\tday: 'numeric',\n\t\t})}</span> <i class=\"far fa-clock\"></i> <span class=\"time-city\">${new Date(\n\t\t\tcityInfo.date\n\t\t).toLocaleString('ja-JP', {\n\t\t\thour: '2-digit',\n\t\t\tminute: '2-digit',\n\t\t})}</span>`;\n\n\t\tconst cityFeelsEl = document.querySelector('[data-city-feels]');\n\t\tcityFeelsEl.innerHTML = `<span data-feels-t>${cityInfo.feels}</span> <span data-unit-t>°C</span>`;\n\t\tconst cityHumidityEl = document.querySelector('[data-city-humidity]');\n\t\tcityHumidityEl.innerText = `${cityInfo.humidity} %`;\n\t\tconst cityRainEl = document.querySelector('[data-city-rain]');\n\t\tcityRainEl.innerText = `${cityInfo.rain} %`;\n\t\tconst cityWindEl = document.querySelector('[data-city-wind]');\n\t\tcityWindEl.innerHTML = `<span data-speed>${cityInfo.wind}</span> <span data-speed-unit>km/h</span>`;\n\n\t\t//daily container\n\t\tconst dailyDisplayContainer = document.querySelector(\n\t\t\t'[data-daily-display-container]'\n\t\t);\n\t\tdailyDisplayContainer.classList.add('display-ok');\n\t\t//animation\n\t\tdailyDisplayContainer.classList.add('appear-right');\n\t\tsetTimeout(function () {\n\t\t\tdailyDisplayContainer.classList.remove('appear-right');\n\t\t}, 500);\n\t\tclearElement(dailyDisplayContainer);\n\t\tcityInfo.daily.forEach((day, index) => {\n\t\t\tconst dayEl = document.createElement('div');\n\t\t\tdayEl.classList.add('daily-body');\n\t\t\tdayEl.innerHTML = `\n                <h2 class=\"day\">${new Date(day.day).toLocaleString('ja-JP', {\n\t\t\t\t\t\t\t\t\tweekday: 'short',\n\t\t\t\t\t\t\t\t})}</h2>\n                <div class=\"max-temp\" data-max-temp><span data-max-t>${\n\t\t\t\t\t\t\t\t\tday.max_temp\n\t\t\t\t\t\t\t\t}</span> <span data-max-unit-t>°C</span></div>\n                <div class=\"min-temp\" data-min-temp><span data-min-t>${\n\t\t\t\t\t\t\t\t\tday.min_temp\n\t\t\t\t\t\t\t\t}</span> <span data-min-unit-t>°C</span></div>\n                <div class=\"icon-temp\">${convertTextToIcon(day.icon)}</div>\n            `;\n\t\t\tdailyDisplayContainer.appendChild(dayEl);\n\t\t});\n\t};\n\n\t//convert celsius to fahrenheit\n\tconst convertCtoF = (event) => {\n\t\t//console.log(event.target);\n\t\tconst celsiusButton = document.querySelector('[data-celsius-button]');\n\t\tconst fahrenheitButton = document.querySelector('[data-fahrenheit-button]');\n\t\tcelsiusButton.disabled = false;\n\t\tfahrenheitButton.disabled = true;\n\n\t\t//city temp\n\t\tconst temp = document\n\t\t\t.querySelector('[data-city-temperature]')\n\t\t\t.querySelector('[data-main-t]');\n\t\tconst convertedTemp = Math.round((temp.innerText * (9 / 5) + 32) * 10) / 10;\n\t\ttemp.innerText = convertedTemp;\n\t\tconst unit = document\n\t\t\t.querySelector('[data-city-temperature]')\n\t\t\t.querySelector('[data-unit-t]');\n\t\tunit.innerText = '°F';\n\n\t\t//city feels like\n\t\tconst tempFeels = document\n\t\t\t.querySelector('[data-city-feels]')\n\t\t\t.querySelector('[data-feels-t]');\n\t\tconst convertedTempFeels =\n\t\t\tMath.round((tempFeels.innerText * (9 / 5) + 32) * 10) / 10;\n\t\ttempFeels.innerText = convertedTempFeels;\n\t\tconst unitFeels = document\n\t\t\t.querySelector('[data-city-feels]')\n\t\t\t.querySelector('[data-unit-t]');\n\t\tunitFeels.innerText = '°F';\n\n\t\t//city wind speed\n\t\tconst speed = document\n\t\t\t.querySelector('[data-city-wind]')\n\t\t\t.querySelector('[data-speed]');\n\t\tconst convertedSpeed = Math.round((speed.innerText / 1.609) * 100) / 100;\n\t\tspeed.innerText = convertedSpeed;\n\t\tconst speedUnit = document\n\t\t\t.querySelector('[data-city-wind]')\n\t\t\t.querySelector('[data-speed-unit]');\n\t\tspeedUnit.innerText = 'mph';\n\n\t\t//forecast daily\n\t\tconst dailyChilds = document\n\t\t\t.querySelector('[data-daily-display-container]')\n\t\t\t.querySelectorAll('.daily-body');\n\n\t\tfor (let i = 0; i < dailyChilds.length; i++) {\n\t\t\tlet childDiv = dailyChilds[i];\n\t\t\t//max temp\n\t\t\tconst maxTempDaily = childDiv.querySelector('[data-max-t]');\n\t\t\tconst convertedMaxTempDaily =\n\t\t\t\tMath.round((maxTempDaily.innerText * (9 / 5) + 32) * 10) / 10;\n\t\t\tmaxTempDaily.innerText = convertedMaxTempDaily;\n\t\t\tconst maxUnitDaily = childDiv.querySelector('[data-max-unit-t]');\n\t\t\tmaxUnitDaily.innerText = '°F';\n\t\t\t//min temp\n\t\t\tconst minTempDaily = childDiv.querySelector('[data-min-t]');\n\t\t\tconst convertedMinTempDaily =\n\t\t\t\tMath.round((minTempDaily.innerText * (9 / 5) + 32) * 10) / 10;\n\t\t\tminTempDaily.innerText = convertedMinTempDaily;\n\t\t\tconst minUnitDaily = childDiv.querySelector('[data-min-unit-t]');\n\t\t\tminUnitDaily.innerText = '°F';\n\t\t}\n\t};\n\n\t//convert fahrenheit to fahrenheit\n\tconst convertFtoC = (event) => {\n\t\t//console.log(event.target);\n\t\tconst fahrenheitButton = document.querySelector('[data-fahrenheit-button]');\n\t\tconst celsiusButton = document.querySelector('[data-celsius-button]');\n\t\tfahrenheitButton.disabled = false;\n\t\tcelsiusButton.disabled = true;\n\n\t\t//city temp\n\t\tconst temp = document\n\t\t\t.querySelector('[data-city-temperature]')\n\t\t\t.querySelector('[data-main-t]');\n\t\tconst convertedTemp =\n\t\t\tMath.round((((temp.innerText - 32) * 5) / 9) * 10) / 10;\n\t\ttemp.innerText = convertedTemp;\n\t\tconst unit = document\n\t\t\t.querySelector('[data-city-temperature]')\n\t\t\t.querySelector('[data-unit-t]');\n\t\tunit.innerText = '°C';\n\n\t\t//city feels like\n\t\tconst tempFeels = document\n\t\t\t.querySelector('[data-city-feels]')\n\t\t\t.querySelector('[data-feels-t]');\n\t\tconst convertedTempFeels =\n\t\t\tMath.round((((tempFeels.innerText - 32) * 5) / 9) * 10) / 10;\n\t\ttempFeels.innerText = convertedTempFeels;\n\t\tconst unitFeels = document\n\t\t\t.querySelector('[data-city-feels]')\n\t\t\t.querySelector('[data-unit-t]');\n\t\tunitFeels.innerText = '°C';\n\n\t\t//city wind speed\n\t\tconst speed = document\n\t\t\t.querySelector('[data-city-wind]')\n\t\t\t.querySelector('[data-speed]');\n\t\tconst convertedSpeed = Math.round(speed.innerText * 1.609 * 100) / 100;\n\t\tspeed.innerText = convertedSpeed;\n\t\tconst speedUnit = document\n\t\t\t.querySelector('[data-city-wind]')\n\t\t\t.querySelector('[data-speed-unit]');\n\t\tspeedUnit.innerText = 'km/h';\n\n\t\t//forecast daily\n\t\tconst dailyChilds = document\n\t\t\t.querySelector('[data-daily-display-container]')\n\t\t\t.querySelectorAll('.daily-body');\n\n\t\tfor (let i = 0; i < dailyChilds.length; i++) {\n\t\t\tlet childDiv = dailyChilds[i];\n\t\t\t//max temp\n\t\t\tconst maxTempDaily = childDiv.querySelector('[data-max-t]');\n\t\t\tconst convertedMaxTempDaily =\n\t\t\t\tMath.round((((maxTempDaily.innerText - 32) * 5) / 9) * 10) / 10;\n\t\t\tmaxTempDaily.innerText = convertedMaxTempDaily;\n\t\t\tconst maxUnitDaily = childDiv.querySelector('[data-max-unit-t]');\n\t\t\tmaxUnitDaily.innerText = '°C';\n\t\t\t//min temp\n\t\t\tconst minTempDaily = childDiv.querySelector('[data-min-t]');\n\t\t\tconst convertedMinTempDaily =\n\t\t\t\tMath.round((((minTempDaily.innerText - 32) * 5) / 9) * 10) / 10;\n\t\t\tminTempDaily.innerText = convertedMinTempDaily;\n\t\t\tconst minUnitDaily = childDiv.querySelector('[data-min-unit-t]');\n\t\t\tminUnitDaily.innerText = '°C';\n\t\t}\n\t};\n\n\t//convert temp to icon\n\tconst convertTextToIcon = (logoText) => {\n\t\tif (logoText === '01d' || logoText === '01n') {\n\t\t\treturn `<i class=\"fas fa-sun\"></i>`;\n\t\t} else if (logoText === '02d' || logoText === '02n') {\n\t\t\treturn `<i class=\"fas fa-cloud-sun\"></i>`;\n\t\t} else if (logoText === '03d' || logoText === '03n') {\n\t\t\treturn `<i class=\"fas fa-cloud\"></i>`;\n\t\t} else if (logoText === '04d' || logoText === '04n') {\n\t\t\t// return `<i class=\"fas fa-cloud\"></i> <div class=\"second-cloud\"><i class=\"fas fa-cloud\"></i></div>`;\n\t\t\treturn `<i class=\"fas fa-cloud\"></i>`;\n\t\t} else if (logoText === '09d' || logoText === '09n') {\n\t\t\treturn `<i class=\"fas fa-cloud-rain\"></i>`;\n\t\t} else if (logoText === '10d' || logoText === '10n') {\n\t\t\t// return `<i class=\"fas fa-cloud-showers-heavy\"></i> <div class=\"second-cloud-shower\"><i class=\"fas fa-cloud\"></i></div>`;\n\t\t\treturn `<i class=\"fas fa-cloud-showers-heavy\"></i>`;\n\t\t} else if (logoText === '11d' || logoText === '11n') {\n\t\t\treturn `<i class=\"fas fa-poo-storm\"></i>`;\n\t\t} else if (logoText === '13d' || logoText === '13n') {\n\t\t\treturn `<i class=\"fas fa-snowflake\"></i>`;\n\t\t} else if (logoText === '50d' || logoText === '50n') {\n\t\t\treturn `<i class=\"fas fa-smog\"></i>`;\n\t\t}\n\t};\n\n\t//clear elements in daily container\n\tconst clearElement = (element) => {\n\t\twhile (element.firstChild) {\n\t\t\telement.removeChild(element.firstChild);\n\t\t}\n\t};\n\n\t// local time\n\tconst getLocalTime = (data) => {\n\t\tlet date = new Date();\n\t\tlet time = date.getTime();\n\t\tlet localOffset = date.getTimezoneOffset() * 60000;\n\t\tlet utc = time + localOffset;\n\t\tlet localTime = utc + 1000 * data;\n\t\t// let localTimeDate = new Date(localTime);\n\t\t// let options = {\n\t\t// \tweekday: 'short',\n\t\t// \tyear: 'numeric',\n\t\t// \tmonth: 'long',\n\t\t// \tday: 'numeric',\n\t\t// \thour: '2-digit',\n\t\t// \tminute: '2-digit',\n\t\t// \tsecond: '2-digit',\n\t\t// };\n\t\t// return localTimeDate.toLocaleString('en-US', options);\n\t\treturn localTime;\n\t};\n\n\treturn {\n\t\tsubmitCity,\n\t\tgetLatAndLon,\n\t\tconvertCtoF,\n\t\tconvertFtoC,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeControl);\n\n\n//# sourceURL=webpack://weather-app/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/layout.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n\n_layout__WEBPACK_IMPORTED_MODULE_0__.default.createLayout();\n\n//event listeners\n\nconst newCityForm = document.querySelector('[data-search-form]');\nnewCityForm.addEventListener('submit', _controller__WEBPACK_IMPORTED_MODULE_1__.default.submitCity);\n\nconst convertToFButton = document.querySelector('[data-fahrenheit-button]');\nconvertToFButton.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.default.convertCtoF);\n\nconst convertToCButton = document.querySelector('[data-celsius-button]');\nconvertToCButton.addEventListener('click', _controller__WEBPACK_IMPORTED_MODULE_1__.default.convertFtoC);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Module - layout app\nconst initializeDOM = (function () {\n\tconst createHeader = () => {\n\t\tconst header = document.createElement('div');\n\t\theader.innerHTML = `<i class=\"fas fa-cloud-sun\"></i> 天気アプリ`;\n\t\theader.classList.add('header');\n\n\t\treturn header;\n\t};\n\n\tconst createSearchContainer = () => {\n\t\tconst searchContainer = document.createElement('div');\n\t\tsearchContainer.classList.add('search-container');\n\n\t\tsearchContainer.innerHTML = `\n        <h2 class=\"city-search-title\"><i class=\"far fa-hand-point-right\"></i> ...の天気は? <i class=\"far fa-hand-point-down\"></i></h2>\n            <form action=\"\" data-search-form>\n                <input \n                    type=\"text\" \n                    class=\"new city\"\n                    maxlength=\"30\"\n                    data-search-city-input\n                    placeholder=\"新しい都市名\"\n                    aria-label=\"search city name\"\n                />\n                <button class=\"btn search\" aria-label=\"search city\"><i class=\"fas fa-search-location\"></i></button>\n            </form>\n        `;\n\n\t\treturn searchContainer;\n\t};\n\n\tconst createCityContainer = () => {\n\t\tconst cityContainer = document.createElement('div');\n\t\tcityContainer.classList.add('city-container');\n\t\tcityContainer.setAttribute('data-city-display-container', '');\n\n\t\tcityContainer.innerHTML = `\n            <div class=\"city-header\">\n                <h2 class=\"city-title\" data-city-title></h2>\n                <h2 class=\"city-temperature\" data-city-temperature></h2>\n                <div class=\"icon-temperature\" data-city-icon-temperature></div>\n                <div class=\"date-container\">\n                    <p class=\"city-date\" data-city-date></p>\n                    <span class=\"triangle\"></span>\n                </div>\n            </div>\n\n            <div class=\"city-body\">\n                <div class=\"info-city\"> \n                    <h3><i class=\"fas fa-thermometer-half\"></i> のような感じ</h3>\n                    <p data-city-feels></p>\n                </div>\n                <div class=\"info-city\"> \n                    <h3><i class=\"fas fa-water\"></i> 湿度</h3>\n                    <p data-city-humidity></p>\n                </div>\n                <div class=\"info-city\">\n                    <h3><i class=\"fas fa-cloud-rain\"></i> 雨</h3>\n                    <p data-city-rain></p>\n                </div>\n                <div class=\"info-city\">\n                    <h3><i class=\"fas fa-wind\"></i> 風速</h3>\n                    <p data-city-wind></p>\n                </div>\n            </div>\n\n            <div class=\"degree-stuff\">\n                <button class=\"btn degree\" data-fahrenheit-button><i class=\"fas fa-temperature-high\"></i> Fahrenheit</button>\n                <button class=\"btn degree\" data-celsius-button><i class=\"fas fa-temperature-low\"></i> Celsius</button>\n            </div>\n        `;\n\t\treturn cityContainer;\n\t};\n\n\tconst createDailyCityContainer = () => {\n\t\tconst dailyContainer = document.createElement('div');\n\t\tdailyContainer.classList.add('daily-container');\n\t\tdailyContainer.setAttribute('data-daily-display-container', '');\n\n\t\treturn dailyContainer;\n\t};\n\n\tconst createHourlyCityContainer = () => {};\n\n\tconst createLayout = () => {\n\t\tconst content = document.getElementById('content');\n\n\t\tcontent.append(\n\t\t\tcreateHeader(),\n\t\t\tcreateSearchContainer(),\n\t\t\tcreateCityContainer(),\n\t\t\tcreateDailyCityContainer()\n\t\t);\n\t};\n\n\treturn {\n\t\tcreateLayout,\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeDOM);\n\n\n//# sourceURL=webpack://weather-app/./src/layout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;