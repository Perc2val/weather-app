let currentLocation = "Berlin";
let data;

async function getWeatherData(location){
    
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=ZLASJEDP5KQNPTUYSAYD5EVGH`)
        data = await response.json();
        currentLocation = location;

    } catch {
        getWeatherData(currentLocation);
        console.log("Error")
    }
    console.log(data)
}

function getSupportData(){
        let longitude = data.longitude;
        let latitude = data.latitude;
        let currentTime = data.currentConditions.datetime;
    let supportInfo = {longitude, latitude, currentTime};
    return supportInfo;
}

function getTodayData(){
        let currentTemp = data.currentConditions.temp;
        let currentInfo = data.currentConditions.conditions;
        let dayTodayTempMax = data.days[0].tempmax;
        let dayTodayTempMin = data.days[0].tempmin;
        let dayTodayUV = data.days[0].uvindex;
    let dayToday = {dayTodayTempMax, dayTodayTempMin, dayTodayUV, currentTemp, currentInfo};

    return dayToday
}

function getWeekData(){
        let descriptionWeek = data.description;
        let dayTwoTempMax = data.days[1].tempmax;
        let dayTwoUV = data.days[1].uvindex;
        let dayTwoIcon = data.days[1].icon;
        let dayThreeTempMax = data.days[2].tempmax;
        let dayThreeUV = data.days[2].uvindex;
        let dayThreeIcon = data.days[2].icon;
        let dayFourTempMax = data.days[3].tempmax;
        let dayFourUV = data.days[3].uvindex;
        let dayFourIcon = data.days[3].icon;
        let dayFiveTempMax = data.days[4].tempmax;
        let dayFiveUV = data.days[4].uvindex;
        let dayFiveIcon = data.days[4].icon;
    console.log(dayTwoIcon)
    let week = {dayTwoTempMax, dayTwoUV, dayThreeTempMax, dayThreeUV, dayFourTempMax, dayFourUV, dayFiveTempMax, dayFiveUV, descriptionWeek, dayTwoIcon, dayThreeIcon, dayFourIcon, dayFiveIcon}
    return week
}

function getAdress(){
    let address = data.address
    let addressObj = {address}
    return addressObj
}
export {getWeatherData, getSupportData, getTodayData, getAdress, getWeekData}

