const obstacles = document.querySelectorAll(".collision");
const path = document.getElementById("inside_path");
const posToFollow = document.getElementById("start").getBoundingClientRect();
const startBtn = document.querySelector(".start-btn");
const grayScreen = document.querySelector(".grayscreen");
const finishZone = document.getElementById("finish");

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

function moveToNextLevel() {
    const url = window.location.href;
    const index = url.indexOf("_") + 2;
    const num = parseInt(url.split("")[index]);
    window.location.href = `/Public/index_L${num+1}.html`;
}

finishZone.addEventListener("mouseover", moveToNextLevel);

for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].onmouseover = overBoundary;
    obstacles[i].onmouseleave = overBoundary;
}

function overBoundary() {
    // const x = document.getElementsByClassName("collision");

    // for (let i = 0; i < x.length; i++) {
        grayScreen.style.display = "block";
    // }
}


startBtn.addEventListener("mouseout", function (event) {
    if (event.relatedTarget.id !== "inside_path") {
        grayScreen.style.display = "block";
    }
})
