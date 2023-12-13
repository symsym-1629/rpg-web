// startBtn = document.querySelector(".startBtn");
// startBtn.addEventListener("click", startGame());
function startGame() {
    var name = document.getElementById("login").value;
    localStorage.setItem("name", name);
    localStorage.setItem("life", 20);
    localStorage.setItem("courage", 0);
    localStorage.setItem("force", 5);
    localStorage.setItem("passage", "");
    localStorage.setItem("deathMessage", "");

}
function addCourage(num) {
    localStorage.setItem("courage", parseInt(localStorage.getItem("courage")) + num);
}
function addForce(num) {
    localStorage.setItem("force", parseInt(localStorage.getItem("force")) + num);
}
function checkForce(issue, requirement,isDead) {//isDead --> boolean pour la cascade
    if (requirement <= localStorage.getItem("force")) {
        transition(issue);
        return
    } else {
        if (isDead == false) {transition("back")}
        else {
        transition("death");
        deathMessage("Vous vous êtes fait casser la gueule.");
        return}
    }
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
    var pageToHide = localStorage.getItem("page");
    btn_cacher = document.getElementById(pageToHide);//changer intro par autre chose ==> ne cache pas les autres quand on fait un retour arrière
    btn_cacher.style.display = "none";
    if (issue != "death") {
        btn_cacher = document.getElementById(issue);
        btn_cacher.style.display = "block";
        localStorage.setItem("page", issue);
    } else {
        // go to death page
        document.location.href = "/aventure/mort.html";
    }
}

function forbiddenAccess() {
    var passage = localStorage.getItem('passage');
    passage = passage.split(" ");
    passage.forEach(element => {
        document.getElementById(element).remove()
    });
}
function storePassage(){
    // stocke la page dans laquelle on est actuellement dans le local storage afin de vois toutes les pages par lesquelles on est passé
    var passage = localStorage.getItem("passage");
    passage += window.location.pathname.split("/").pop().split(".")[0] + " ";
    localStorage.setItem("passage", passage);
}

function deathMessage(message){
    localStorage.setItem("deathMessage", message);
}

function showDeathMessage(){
    var name = localStorage.getItem("name");
    var message = localStorage.getItem("deathMessage");
    document.getElementById("raison").innerHTML = name + ", " + message;
}
function showCourage() {
    var courage = localStorage.getItem("courage");
    document.getElementById("show").innerHTML = courage
}