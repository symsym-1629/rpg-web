startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame());

function startGame(name) {
    sessionStorage.setItem("life", "20");
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("courage", 0);
}

function addCourage(num) {
    sessionStorage.setItem("courage", sessionStorage.getItem("courage") + num);
}

function HideButton1(){
    btn_cacher = document.getElementsByClassName("Btn1");
    btn_afficher = document.getElementsByClassName("Btn2");
    btn_cacher.className = "invisible";
    btn_afficher.className = "visible";
}

