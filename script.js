// startBtn = document.querySelector(".startBtn");
// startBtn.addEventListener("click", startGame());


function addCourage(num) {
    localStorage.setItem("courage", localStorage.getItem("courage") + num);
}
function addForce(num) {
    localStorage.setItem("force", localStorage.getItem("force") + num);
}
function startGame() {
    var name = document.getElementById("login").value;
    localStorage.setItem("name", name);
    localStorage.setItem("life", 20);
    localStorage.setItem("courage", 0);
    localStorage.setItem("force", 5);
    localStorage.setItem("passage", "");
    localStorage.setItem("deathMessage", "");

}
function name() {
    var number = "123";
    document.getElementById("myText").innerHTML = number;
}

function barre() {
    var life = localStorage.getItem("life");
    var courage = localStorage.getItem("courage");
    var name = localStorage.getItem("name");
    document.getElementById("info").innerHTML = "<p> Nom : " + name + "</p><p> Courage : " + courage + "</p><p> Vie : " + life + "</p>";
}

function transition(issue) {
    btn_cacher = document.getElementById("intro");
    btn_cacher.style.display = "none";
    if (issue != "death") {
        btn_cacher = document.getElementById(issue);
        btn_cacher.style.display = "block";
    } else {
        // go to death page
        document.location.href = "/aventure/mort.html";
    }
}
function checkForce(issue, requirement) {
    if (requirement <= localStorage.getItem("force")) {
        transition(issue);
        return
    } else {
        transition("death");
        deathMessage("Vous vous êtes fait casser la gueule.");
        return
    }
}

function storePassage(){
    // stocke la page dans laquelle on est actuellement dans le local storage afin de vois toutes les pages par lesquelles on est passé
    var passage = localStorage.getItem("passage");
    passage += window.location.pathname.split("/").pop() + " ";
    localStorage.setItem("passage", passage);
}

function deathMessage(message){
    localStorage.setItem("deathMessage", message);
}

function showDeathMessage(){
    var message = localStorage.getItem("deathMessage");
    document.getElementById("raison").innerHTML = message;
}
// je veux que la page par laquelle on est passé soit sauvegargée pour que lors du passage
//dans le hub, on ne puisse pas retourner là d'où on vient