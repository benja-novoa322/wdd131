const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const temperature = 17;
const wind_speed = 6;

function calculateWindChill(temperature, wind_speed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temperature * Math.pow(wind_speed, 0.16)

}

let windchill = "N/A";
if (temperature <= 10 && wind_speed > 4.8) {
    windchill = Math.round(calculateWindChill(temperature, wind_speed)) + "°C";
}

document.addEventListener("DOMContentLoaded", () => {
    const windchillcell = document.querySelector(".weather-table tr:last-child td");
    windchillcell.textContent = windchill;
})