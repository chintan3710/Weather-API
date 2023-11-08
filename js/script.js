let img = document.getElementById("img");
let temprature = document.getElementById("temprature");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let speed = document.getElementById("speed");
let toKmPerHour = (meterPerSec) => {
    return Math.trunc(meterPerSec * 3.6) + "km/h";
};

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=surat&appid=eae98a4f3326dde633c520d291c6d551&units=metric`,
    method: "get",
    success: (res) => {
        if (res.main.temp <= 15) {
            img.src = "img/rainy.png";
        } else if (res.main.temp <= 20) {
            img.src = "img/cloud.png";
        } else if (res.main.temp <= 25) {
            img.src = "img/cloudy&sun.png";
        } else if (res.main.temp > 25) {
            img.src = "img/sun.png";
        }
        temprature.innerHTML = res.main.temp;
        city.innerHTML = res.name;
        humidity.innerHTML = res.main.humidity + "%";
        speed.innerHTML = toKmPerHour(res.wind.speed);
    },
});

let showWeather = () => {
    let search = document.getElementById("search").value;

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=eae98a4f3326dde633c520d291c6d551&units=metric`,
        method: "get",
        success: (res) => {
            if (res.main.temp <= 15) {
                img.src = "img/rainy.png";
            } else if (res.main.temp <= 20) {
                img.src = "img/cloud.png";
            } else if (res.main.temp <= 25) {
                img.src = "img/cloudy&sun.png";
            } else if (res.main.temp > 25) {
                img.src = "img/sun.png";
            }
            temprature.innerHTML = res.main.temp;
            city.innerHTML = res.name;
            humidity.innerHTML = res.main.humidity + "%";
            speed.innerHTML = toKmPerHour(res.wind.speed);
        },
    });
};

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        showWeather();
    }
});
