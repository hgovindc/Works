const apiKey="7e81253b39ff4c1621b48f738a172239";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weather =document.querySelector(".weather")


async function  checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);




    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";


 if(data,weather[0].main=="clouds"){
    weather.src="images/clouds.png"

 }
  else if(data,weather[0].main=="clear"){
    weather.src="images/clear.png"
}
else if(data,weather[0].main=="rain"){
    weather.src="images/rain.png"
}
else if(data,weather[0].main=="drizzle"){
    weather.src="images/drizzle.png"
}
else if(data,weather[0].main=="mist"){
    weather.src="images/mist.png"
}


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})
