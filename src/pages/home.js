import { getSupportData, getTodayData, getWeekData } from "../api/weather";
import { dayHelper, formatAddress } from "../utils/helper";


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

}

async function renderMainWeek(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = new Date()
    const data = await getWeekData();
    const weekDiv = document.querySelector(".week");
    const description = document.createElement("h5");
    description.textContent = data.descriptionWeek;

    const helperDivOne = document.createElement("div");
    const helperDivTwo = document.createElement("div");
    const helperDivThree = document.createElement("div");
    const helperDivFour = document.createElement("div");

    const tomorrowHeading = document.createElement("h6");
    const dayTwoHeading = document.createElement("h6");
    const dayThreeHeading = document.createElement("h6");
    const dayFourHeading = document.createElement("h6");

    const iconTomorrow = document.createElement("i");
    const iconDayTwo = document.createElement("i");
    const iconDayThree = document.createElement("i");
    const iconDayFour = document.createElement("i");

    const tempMaxTomorrow = document.createElement("p");
    const tempMaxDayTwo = document.createElement("p");
    const tempMaxDayThree = document.createElement("p");
    const tempMaxDayFour = document.createElement("p");

    const uvTomorrow = document.createElement("p");
    const uvDayTwo = document.createElement("p");
    const uvDayThree = document.createElement("p");
    const uvDayFour = document.createElement("p");

    tomorrowHeading.textContent = days[(day.getDay() + 1) % 7];
    dayTwoHeading.textContent = days[(day.getDay() + 2) % 7];
    dayThreeHeading.textContent = days[(day.getDay() + 3) % 7];
    dayFourHeading.textContent = days[(day.getDay() + 4) % 7];

    tempMaxTomorrow.textContent = data.dayTwoTempMax;
    tempMaxDayTwo.textContent = data.dayThreeTempMax;
    tempMaxDayThree.textContent = data.dayFourTempMax;
    tempMaxDayFour.textContent = data.dayFiveTempMax;

    uvTomorrow.textContent = data.dayTwoUV;
    uvDayTwo.textContent = data.dayThreeUV;
    uvDayThree.textContent = data.dayFourUV;
    uvDayFour.textContent = data.dayFiveUV;


    weekDiv.append(description, helperDivOne, helperDivTwo, helperDivThree, helperDivFour);
    helperDivOne.append(tomorrowHeading, iconTomorrow, tempMaxTomorrow, uvTomorrow);
    helperDivTwo.append(dayTwoHeading, iconDayTwo, tempMaxDayTwo, uvDayTwo);
    helperDivThree.append(dayThreeHeading, iconDayThree, tempMaxDayThree, uvDayThree);
    helperDivFour.append(dayFourHeading, iconDayFour, tempMaxDayFour, uvDayFour);




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

export { renderMainToday, renderSupport, renderMainWeek };
