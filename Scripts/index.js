const boundaries = document.querySelectorAll(".boundary");
console.log(boundaries);

for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].onmouseover = overBoundary;
    boundaries[i].onmouseleave = overBoundary;
}

function overBoundary() {
    const x = document.getElementsByClassName("boundary");

    for (let i = 0; i < x.length; i++) {
        console.log("You lose");
    }
}

// function startClick() {
//     var x = document.getElementsByClassName("boundary");

//     for (var i = 0; i < x.length; i++) {
//         x[i].style.backgroundColor = "#eeeeee";
//         if (x[i].style.backgroundColor != "red") {
//             var s = document.getElementById("status").innerHTML = "Move your mouse over the 'S' to start.";
//         }
//     }
// }

// function overEnd() {
//     var x = document.getElementsByClassName("boundary");

//     for (var i = 0; i < x.length; i++) {
//         if (x[i].style.backgroundColor != "red") {
//             var s = document.getElementById("status").innerHTML = "You win!";
//         }
//     }
// }
