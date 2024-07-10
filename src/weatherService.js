const API_Key='f9eb5727d1b3356fbe76db0c33eccb75';

const getInfo=async (city, units= "metric")=>{
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=${units}`;

    const data=await fetch(URL).then((res)=>res.json()).then((data)=> data);
    console.log(data);
}

export {getInfo};