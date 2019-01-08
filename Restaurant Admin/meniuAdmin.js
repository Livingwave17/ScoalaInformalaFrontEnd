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
        for (var i in lista) {
            if (lista[i]===null){
                continue;
            }
                str += `<tr>
                            <div>
                                <td><img width="150px" height="150px" src="${lista[i].imagine}"></td>
                                <td><span class = "text nume">${lista[i].nume}</span><br><p class = "text">${lista[i].ingrediente}</p></td>
                                <td class="buttons"><a href='./meniuAdminEdit.html?id=${i}'><button class="butonel modifica">MODIFICA</button></a>
                                <a href='./meniuAdminDelete.html?id=${i}'><button class="butonel sterge">STERGE</button></a></td>
                            </div>
                        </tr>`
            }
        document.getElementById("meniu").innerHTML = str
    }