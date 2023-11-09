startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", startGame());

function startGame(name) {
    sessionStorage.setItem("life", "20");
    sessionStorage.setItem("name", name);
}

