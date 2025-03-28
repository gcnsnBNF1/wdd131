
// Static weather values (imperial units)
const temperatureF = 45; // Temperature in °F
const windSpeedMph = 8;  // Wind speed in mph

// Function to calculate wind chill using if-else statements (imperial formula)
function calculateWindChill(temp, speed) {
  if (temp <= 50 && speed > 3) {
    let chill =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * temp * Math.pow(speed, 0.16);
    return chill.toFixed(0);
  } else {
    return "N/A";
  }
}

const windChillValue = calculateWindChill(temperatureF, windSpeedMph);

document.addEventListener("DOMContentLoaded", () => {
  // Update wind chill for the desktop weather overlay
  const windChillEl = document.getElementById("windChill");
  if (windChillEl) {
    if (windChillValue !== "N/A") {
      windChillEl.textContent = windChillValue + "°F";
    } else {
      windChillEl.textContent = "N/A";
    }
  }
  
  // Update wind chill for the mobile weather section
  const windChillMobileEl = document.getElementById("windChillMobile");
  if (windChillMobileEl) {
    if (windChillValue !== "N/A") {
      windChillMobileEl.textContent = windChillValue + "°F";
    } else {
      windChillMobileEl.textContent = "N/A";
    }
  }
});