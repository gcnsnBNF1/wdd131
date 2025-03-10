
const copyrightDate = new Date();
const copyrightYear = copyrightDate.getFullYear();
const copyrightInfo = document.querySelector("#copyrightInfo");
const dateLastModified = new Date(document.lastModified);
const elementLastModified = document.querySelector("#lastModified");

const hours = dateLastModified.getHours();
const minutes = dateLastModified.getMinutes();
const seconds = dateLastModified.getSeconds();

let amPM;
if (hours >= 12) 
{
    amPM = "PM";
} 
else
{
    amPM = "AM";
}

let formatHours = hours % 12;
if (formatHours === 0)
{
    formatHours = 12;
}

let formatMinutes;
if (minutes < 10)
{
    formatMinutes = "0" + minutes;
}
else
{
    formatMinutes = minutes;
}

let formatSeconds;
if (seconds < 10)
{
    formatSeconds = "0" + seconds;
}
else
{
    formatSeconds = seconds;
}

copyrightInfo.innerHTML = `©${copyrightYear} 🏎️ Gavin Christian Nelson 🤠 San Antonio, TX`;
elementLastModified.innerHTML = `Last Modified:
    <span>${new Intl.DateTimeFormat("en-US", {dateStyle: "medium"}).format(dateLastModified)}</span>
     ${formatHours}:${formatMinutes}:${formatSeconds} ${amPM}`;