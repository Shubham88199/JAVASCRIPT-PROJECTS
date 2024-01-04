const api_key = '11632af0e6b54a3f876114701232112';

const form = document.getElementById("form");
const weather = document.getElementById("weather");
const input = document.getElementById("input");

const showdata = (data) => {
    if (data.cod == "400") {
        weather.innerHTML = "city not found";
        return;
    }
    let img_link = "http:" + data.current.condition.icon;
    weather.innerHTML = `
    <div >
           <img id="image" src="" alt="">
    </div>
    <div id="temp">
           <h2>${data.current.temp_c} &deg;C</h2>
           <h4>${data.current.condition.text}</h4>
    </div>
    `
    let imgsrc = document.getElementById("image");
    imgsrc.src = img_link;
};


const getweather = async (city) => {
    const api = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;

    const response = await fetch(api);
    const data = await response.json();
    showdata(data);
};


form.addEventListener("submit", function (event) {
    getweather(input.value);
    event.preventDefault();
});
