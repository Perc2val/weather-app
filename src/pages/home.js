import { getSupportData, getTodayData } from "../api/weather";
import { formatAddress } from "../utils/helper";


async function renderMainToday(){
    const data = await getTodayData();
    const addressData = await formatAddress();
    
    const todayDiv = document.querySelector(".today")
    const address = document.createElement("h2");
    const currentTemp = document.createElement("h4");
    const helperDiv = document.createElement("div");
    const helpDiv = document.createElement("div");
    const currentInfo = document.createElement("p");
    const maxTemp = document.createElement("p");
    const minTemp = document.createElement("p");
    const uv = document.createElement("p");

    todayDiv.append(address, currentTemp, helperDiv );
    helperDiv.append(currentInfo, helpDiv)
    helpDiv.append(maxTemp, minTemp, uv)

    address.textContent = addressData;
    currentTemp.textContent = data.currentTemp + "°";
    currentInfo.textContent = data.currentInfo;
    maxTemp.textContent = "H:" + " " + data.dayTodayTempMax + "°";
    minTemp.textContent = "L:"+ " " + data.dayTodayTempMin + "°";
    uv.textContent = "UV:"+ " " + data.dayTodayUV;

    console.log(data);
}

function renderSupport(){
    const data = getSupportData();
    const support = document.querySelector(".support");
    const time = document.createElement("h3");
    const longitude = document.createElement("p");
    const latitude = document.createElement("p");
    support.append(time, longitude, latitude);
    time.textContent = data.currentTime;
    longitude.textContent = "Longitude" + " " + data.longitude;
    latitude.textContent = "Latitude" + " " + data.latitude;
}

export { renderMainToday, renderSupport };
