const API_Key='78670472ad56c760104772f2fc68c7db';
const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getInfo=async (city, units= "metric")=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=${units}`;

    const data=await fetch(URL).then((res)=>res.json()).then((data)=> data);
    
    const{
        weather,
        main: {temp, feels_like, temp_min, temp_max,pressure, humidity},
        wind:{speed},
        sys:{country},
        name,
    }=data;

    const{description, icon }= weather[0];
    return{
        description,
        iconUrl: makeIconUrl(icon),
        temp,
        feels_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    };
};

export {getInfo};
