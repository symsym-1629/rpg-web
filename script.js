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


