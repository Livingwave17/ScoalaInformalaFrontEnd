        var weather = [];
        var forecast = [];

        function getVreme() {
            var city = document.getElementById("city").value;
            console.log(city);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    weather = JSON.parse(this.responseText);
                    document.getElementById("icon").src = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
                    document.getElementById("Descriere").innerHTML = weather.weather[0].description;
                    document.getElementById("Umiditate").innerHTML = weather.main.humidity;
                    document.getElementById("Presiune").innerHTML = weather.main.pressure;
                    document.getElementById("Temp").innerHTML = weather.main.temp;
                    document.getElementById("TempMax").innerHTML = weather.main.temp_max;
                    document.getElementById("TempMin").innerHTML = weather.main.temp_min;
                    addMap();
                };
            }
            xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`, true);
            xhttp.send();
        }
        function addMap() {
            document.getElementById("map").innerHTML = `<iframe
            width="600"
            height="150"
            frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDspFnkp7L_Nk7MORzPjcwDsiBEE2lPYYQ
            &q=${weather.coord.lat},${weather.coord.lon}&zoom=12" allowfullscreen>
            </iframe>`
        }
        function getForecast() {
            var city = document.getElementById("city").value;
            var xhttp = new XMLHttpRequest();
		    xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
                    forecast = JSON.parse(this.responseText);
                    console.log(forecast);
                    displayForecast();
                };
            }
		    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=${city}`, true);
		    xhttp.send();
        }
        function displayForecast() {
            /*for (var x = 1; x<=6; x++) {
                document.getElementById(`prognosis${x}`).innerHTML = `<span class="bleu">${forecast.list[x].dt_txt.substring(0, 10)}</span>`;
            }*/
            var str="";
            var prognosis;
            var currentDay = null;
            var day = 1;
            for (var i=0; i<forecast.list.length;i++) {
                str = `<div class="hourly">
                <img src="http://openweathermap.org/img/w/${forecast.list[i].weather[0].icon}.png"><br>
                <span>Ora: ${forecast.list[i].dt_txt.substring(11, 16)}</span><br>
                <span>Temperatura: ${forecast.list[i].main.temp}</span><br>
                <span>Descriere: ${forecast.list[i].weather[0].description}</span>
                </div>`
                if(currentDay === null){
                    currentDay = forecast.list[0].dt_txt.substring(0, 10);
                    document.getElementById(`prognosis${day}`).innerHTML = `<span class="bleu">${forecast.list[i].dt_txt.substring(0, 10)}</span>`;
                    document.getElementById(`prognosis${day}`).innerHTML += str;
                }else if (forecast.list[i].dt_txt.substring(0, 10) === currentDay) {
                    document.getElementById(`prognosis${day}`).innerHTML += str;
                } else {
                    currentDay = forecast.list[i].dt_txt.substring(0, 10);
                    day += 1;
                    document.getElementById(`prognosis${day}`).innerHTML = `<span class="bleu">${forecast.list[i].dt_txt.substring(0, 10)}</span>`;
                    document.getElementById(`prognosis${day}`).innerHTML += str;
                }
            }
        }