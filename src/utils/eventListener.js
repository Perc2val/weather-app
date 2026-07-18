import { getWeatherData,  } from "../api/weather";
import { renderMainToday, renderMainWeek, renderSupport } from "../pages/home";
import { clearMainToday, clearMainWeek, clearSupport } from "./clear";
import { formatAddress } from "./helper";
import { render, input, form } from "./querySelector";

function buildEventListener(){
    render.addEventListener("click", async (e)=>{
        clearSupport();
        clearMainToday();
        clearMainWeek();
        e.preventDefault();
        await getWeatherData(input.value);
        formatAddress();
        renderMainWeek();
        renderMainToday();
        renderSupport();
        form.reset();
    });
}

export {buildEventListener}