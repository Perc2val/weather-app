let currentLocation = "Berlin";
let data;

async function getWeatherData(location){
    
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=ZLASJEDP5KQNPTUYSAYD5EVGH`)
        data = await response.json();
        currentLocation = location;
            let currentTemp = data.currentConditions.temp;
            let currentUV = data.currentConditions.uvindex;
        let currentConditions = {currentTemp, currentUV,};
            let dayTodayTempMax = data.days[0].tempmax;
            let dayTodayTempMin = data.days[0].tempmin;
            let dayTodayUV = data.days[0].uvindex;
        let dayToday = {dayTodayTempMax, dayTodayTempMin, dayTodayUV};
            let dayTwoTempMax = data.days[1].tempmax;
            let dayTwoTempMin = data.days[1].tempmin;
            let dayTwoUV = data.days[1].uvindex;
        let dayTwo = {dayTwoTempMax, dayTwoTempMin, dayTwoUV};
            let dayThreeTempMax = data.days[2].tempmax;
            let dayThreeTempMin = data.days[2].tempmin;
            let dayThreeUV = data.days[2].uvindex;
        let dayThree = {dayThreeTempMax, dayThreeTempMin, dayThreeUV};
            let dayFourTempMax = data.days[3].tempmax;
            let dayFourTempMin = data.days[3].tempmin;
            let dayFourUV = data.days[3].uvindex;
        let dayFour = {dayFourTempMax, dayFourTempMin, dayFourUV};
            let dayFiveTempMax = data.days[4].tempmax;
            let dayFiveTempMin = data.days[4].tempmin;
            let dayFiveUV = data.days[4].uvindex;
        let dayFive = {dayFiveTempMax, dayFiveTempMin, dayFiveUV};

    console.log(data)

    return currentConditions, dayToday, dayTwo, dayThree, dayFour, dayFive

    } catch {
        getWeatherData(currentLocation);
        console.log("Error")
    }
}

function getSupportData(){
        let address = data.address;
        let longitude = data.longitude;
        let latitude = data.latitude;
        let currentTime = data.currentConditions.datetime;
    let supportInfo = {address, longitude, latitude, currentTime};
    return supportInfo;
}
export {getWeatherData, getSupportData}

