import { getWeatherData } from "./api/weather";
import { buildEventListener } from "./utils/eventListener";
import "./styles/styles.css";


getWeatherData("berlin");
buildEventListener();