

let countEl = document.getElementById("count-el")
let preEl = document.getElementById("save-count")

let count = 0

function increaseCount() {
    count += 1
    countEl.textContent = count
}

function decreaseCount() {
    count -= 1
    countEl.textContent = count
}

function saveCount() {
    preEl.textContent += count + " - 