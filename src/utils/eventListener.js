import { getAdress, getSupportData, getWeatherData } from "../api/weather";
import { renderMainToday, renderSupport } from "../pages/home";
import { clearMainToday, clearSupport } from "./clear";
import { formatAddress } from "./helper";
import { render, input, form } from "./querySelector";

function buildEventListener(){
    render.addEventListener("click", async (e)=>{
        clearSupport();
        clearMainToday();
        e.preventDefault();
        await getWeatherData(input.value);
        formatAddress();
        renderMainToday();
        renderSupport();
        form.reset();
    });
}

export {buildEventListener}