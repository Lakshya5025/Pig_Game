"use strict";
const image = document.querySelector(".image");
const p0_cs = document.getElementById("p0-cs");
const p1_cs = document.getElementById("p1-cs");
const p0_ts = document.getElementById("p0-ts");
const p1_ts = document.getElementById("p1-ts");
const total_score = [0, 0];
let active_player = 0;
let current_score = 0;
document.getElementById(`p${active_player}`).classList.add("active");
document.querySelector(".roll").addEventListener("click", function () {
    const random_number = Math.trunc(Math.random() * 6) + 1;
    console.log(random_number);
    image.classList.remove("hidden");
    image.src = `./Dice images/dice-${random_number}.png`;
    if (random_number !== 1) {
        current_score += random_number;
        document.getElementById(`p${active_player}-cs`).textContent = current_score;
    }
    else {
        current_score = 0;
        document.getElementById(`p${active_player}-cs`).textContent = current_score;
        active_player = active_player === 1 ? 0 : 1;
        removeBgColor();
        document.getElementById(`p${active_player}`).classList.add("active");
        removeBgColor();
    }
})


document.querySelector(".hold").addEventListener("click", function () {
    total_score[active_player] += current_score;
    if (total_score[active_player] >= 100) {
        document.getElementById(`p${active_player}-ts`).textContent = total_score[active_player];
        document.getElementById(`p${active_player}`).classList.remove("active");
        document.getElementById(`p${active_player}`).classList.add("winner");
        document.querySelector(".roll").disabled = true;
        document.querySelector(".hold").disabled = true;
    }
    else {
        document.getElementById(`p${active_player}-ts`).textContent = total_score[active_player];
        current_score = 0;
        document.getElementById(`p${active_player}-cs`).textContent = current_score;
        active_player = active_player === 1 ? 0 : 1;
        document.getElementById(`p${active_player}`).classList.add("active");
        removeBgColor();
    }
})


document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector(".hold").disabled = false;
    document.querySelector(".roll").disabled = false;
    document.getElementById(`p${active_player}`).classList.remove("active");
    document.getElementById(`p${active_player}`).classList.remove("winner");
    total_score[0] = 0;
    total_score[1] = 0;
    p0_cs.textContent = 0;
    p1_cs.textContent = 0;
    p0_ts.textContent = 0;
    p1_ts.textContent = 0;
    active_player = 0;
    document.getElementById(`p${active_player}`).classList.add("active");
    removeBgColor()
})

function removeBgColor() {
    let box = active_player === 1 ? 0 : 1;
    document.getElementById(`p${box}`).classList.remove("active");
}