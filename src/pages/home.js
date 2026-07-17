import { getSupportData } from "../api/weather";


function renderMain(){

}

function renderSupport(){
    const data = getSupportData();
    const support = document.querySelector(".support");
    const time = document.createElement("h3");
    const longitude = document.createElement("p");
    const latitude = document.createElement("p");
    support.append(time, longitude, latitude);
    console.log(data)
}

export {renderSupport}