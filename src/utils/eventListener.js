import { getSupportData, getWeatherData } from "../api/weather";
import { renderSupport } from "../pages/home";
import { render, input, form } from "./querySelector";

function buildEventListener(){
    render.addEventListener("click", async (e)=>{
        e.preventDefault();
        await getWeatherData(input.value);
        renderSupport();
        form.reset();
    });
}

export {buildEventListener}