// Task  Show github avatar
function showAvatar(){
    let image = document.createElement("img")
    let imageContainer = document.getElementsByTagName("div")[0];
    fetch ('https://api.github.com/users/Serhii-Ahafonov').then(result => result.json()).then(user => {
        image.setAttribute("src", user.avatar_url);
        image.className = "show"
        imageContainer.appendChild(image);
    });
}


// За допомогою ajax-запиту вивести погоду

let weather = new XMLHttpRequest();
weather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19 ", false);
weather.send (null);

let r = JSON.parse(weather.response);

let temp = r.main.temp +" °C" + "<br/>";
let windDeg = "Wind: " + r.wind.speed +" km/h " + r.wind.deg + "<br/>";
let humidity = "Humidity: " + r.main.humidity + " %" + "<br/>";
let pressure = "Pressure: " + r.main.pressure +" hPa" + "<br/>";
let description = r.weather [0].description + "<br/>";

let today = new Date();
let dayNumber =  today.getDay()+1;
let days = [ "Mon", "Tue" ,"Wed","Thu","Fri","Sat","Sun"];
let date = "Apr " + today.getDate()+", " + today.getFullYear() + " - " + days[dayNumber];

let hour = today.getHours();
let minute = today.getMinutes();
var prepand = (hour >= 12)? " PM ":" AM ";

let mainHour =  hour + " : " + minute + prepand;

if (hour===0 && prepand==='PM ') { 
    if (minute===0 && second===0){ 
        hour=12;
        prepand=' Noon';
    } else{ 
        hour=12;
        prepand=' PM';
    } 
} 


document.getElementById("currentTime").innerHTML= mainHour;
document.getElementById("currentDate").innerHTML= date;
document.getElementById("temp").innerHTML= temp;
document.getElementById("wind").innerHTML = windDeg;
document.getElementById("humidity").innerHTML= humidity;
document.getElementById("pressure").innerHTML = pressure;
document.getElementById("description").innerHTML = description;





// {
//     "coord":{"lon":24.02,"lat":49.84},
//     "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],
//     "base":"stations",
//     "main":{"temp":17,"feels_like":12.93,"temp_min":17,"temp_max":17,"pressure":1017,"humidity":27},
//     "visibility":10000,
//     "wind":{"speed":2.56,"deg":170},
//     "clouds":{"all":1},
//     "dt":1586710030,
//     "sys":{"type":1,"id":8909,"country":"UA","sunrise":1586662600,"sunset":1586711528},
//     "timezone":10800,
//     "id":702550,
//     "name":"Lviv",
//     "cod":200
// }