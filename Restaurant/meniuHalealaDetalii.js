
        var target = location.search.substring(4);
        console.log(target)
        var lista = []

    function getDetalii() {
        var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
                lista = JSON.parse(this.responseText);
                deseneazaDetalii()
            }
        }
        xhttp.open("GET", `https://restaurant-cd157.firebaseio.com/${target}.json`, true);
		xhttp.send();
    }

    function deseneazaDetalii() {
        document.getElementById("1").src = lista.imagine;
        document.getElementById("2").innerHTML = lista.nume;
        document.getElementById("3").innerHTML = lista.ingrediente;
        document.getElementById("4").innerHTML = lista.reteta;
    }