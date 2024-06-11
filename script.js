const apiKey= "498a55c0c7faf71e1cbc6edb07ea1867";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=surat&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity:" + " " + data.main.humidity + "%";
    
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
