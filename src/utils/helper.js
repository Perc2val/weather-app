import { getAdress } from "../api/weather";


async function formatAddress(){
    let data = await getAdress();
    let dataValue = data.address;
    let s2 = dataValue.charAt(0).toUpperCase() + dataValue.slice(1);
    return s2
}

export {formatAddress, 
}