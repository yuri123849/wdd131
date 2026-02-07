const tempC = 28;
const windKmh = 10;

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();


document.getElementById("lastModified").innerHTML = document.lastModified;

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    (0.6215 * temp) -
    (11.37 * Math.pow(wind, 0.16)) +
    (0.3965 * temp * Math.pow(wind, 0.16))
  );
}

let windChillValue = "N/A";

if (tempC <= 10 && windKmh > 4.8) {
  windChillValue = Math.round(calculateWindChill(tempC, windKmh));
}

document.getElementById("temp").textContent = tempC;
document.getElementById("wind").textContent = windKmh;
document.getElementById("wind_chill").textContent = windChillValue;
document.getElementById("condition").textContent = "Partly Cloudy";