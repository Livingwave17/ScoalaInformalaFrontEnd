function add() {
    var edited = {};
    edited['imagine'] = document.getElementById("imagine").value;
    edited['nume'] = document.getElementById("nume").value;
    edited['ingrediente'] = document.getElementById("ingrediente").value;
    edited['reteta'] = document.getElementById("reteta").value;
    console.log(edited);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.location.replace("./meniuAdmin.html");
        }
    }
    xhttp.open("POST", `https://restaurant-cd157.firebaseio.com/.json`, true);
    xhttp.send(JSON.stringify(edited));
}

//--------------------------------------------------------

var preparat = [];
        var food = location.search.substring(4);

        function getPreparat(){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
						preparat = JSON.parse(this.responseText);
                        document.getElementById("imagine").value = preparat.imagine;
                        document.getElementById("nume").value = preparat.nume;
                        document.getElementById("ingrediente").value = preparat.ingrediente;
                        document.getElementById("reteta").value = preparat.reteta;
				}
            }
            xhttp.open("GET", `https://restaurant-cd157.firebaseio.com/${food}.json`, true);
            xhttp.send();
        }

        function edit() {
            var edited = {};
            edited['imagine'] = document.getElementById("imagine").value;
            edited['nume'] = document.getElementById("nume").value;
            edited['ingrediente'] = document.getElementById("ingrediente").value;
            edited['reteta'] = document.getElementById("reteta").value;
            console.log(edited);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    window.location.replace("./meniuAdmin.html");
                }
            }
            xhttp.open("PUT", `https://restaurant-cd157.firebaseio.com/${food}.json`, true);
            xhttp.send(JSON.stringify(edited));
        }

//---------------------------------------------------------------------------------
        var deSters = location.search.substring(4);

        function text() {
            console.log(deSters);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var haleala = JSON.parse(this.responseText);
                    document.querySelector("p").innerHTML = `Esti pe cale sa stergi preparatul: "${haleala.nume}"<br><br>
                                    Confirmi stergerea?`
                }
            }
            xhttp.open("GET", `https://restaurant-cd157.firebaseio.com/${deSters}.json`, true);
            xhttp.send();
        }

        function sterge() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    redirect();
                }
            }
            xhttp.open("DELETE", `https://restaurant-cd157.firebaseio.com/${deSters}.json`, true);
            xhttp.send();
        }

        function redirect () {
            window.location.replace("./meniuAdmin.html");
        }