var lista = [];

    function getMeniu(){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					   // Typical action to be performed when the document is ready:
					   lista = JSON.parse(this.responseText);
					   deseneazaMeniu();
					}
				};
				xhttp.open("GET", "https://restaurant-cd157.firebaseio.com/.json", true);
				xhttp.send();
			}

    function deseneazaMeniu() {
        var str = "";
        var ingredient = document.getElementById("searchable").value;
        for (var i in lista) {
            if (lista[i].ingrediente.indexOf(ingredient) > -1) {
                str += `<tr>
                            <div class="row">
                                <td><img width="150px" height="150px" src="${lista[i].imagine}"></td>
                                <td><span class = "nume text">${lista[i].nume}</p><br><span class = "text">${lista[i].ingrediente}</p></td>
                                <td><a href='meniuHalealaDetalii.html?id=${i}'><button class="butonel">DETALII</button></a></td>
                            </div>
                        </tr>`
            }
        }
        document.getElementById("meniu").innerHTML = str
    }