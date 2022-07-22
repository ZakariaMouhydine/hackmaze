const obstacles = document.querySelectorAll(".collision");
const path = document.getElementById("inside_path");
const posToFollow = document.getElementById("start").getBoundingClientRect();
const startBtn = document.querySelector(".start-btn");
const grayScreen = document.querySelector(".grayscreen");
const finishZone = document.getElementById("finish");
let cursorInPath = false;
console.log(cursorInPath);

function resizeBtn() {
    setTimeout(() => {
        window.location.reload();
    }, 0);
}

startBtn.style.top = posToFollow.top + "px";
startBtn.style.left = posToFollow.left + "px";
startBtn.style.height = posToFollow.height + "px";
startBtn.style.width = posToFollow.width + "px";

window.onresize = resizeBtn;

startBtn.addEventListener("click", () => {
    grayScreen.style.display = "none";
});

if (path.onmouseover) {
    console.log("here");
}

if (path.onmouseout && startBtn.onmouseout) {
    cursorInPath = false;
    console.log(cursorInPath);
}

function moveToNextLevel() {
    const url = window.location.href;
    const index = url.indexOf("_") + 2;
    const num = parseInt(url.split("")[index]);
    window.location.href = `/Public/index_L${num+1}.html`;
}

finishZone.addEventListener("mouseover", moveToNextLevel);

for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].onmouseover = overBoundary;
    obstacles[i].onmouseleave = overBoundary;
}

function overBoundary() {
    var x = document.getElementsByClassName("collision");

    for (var i = 0; i < x.length; i++) {
        grayScreen.style.display = "block";
    }
}