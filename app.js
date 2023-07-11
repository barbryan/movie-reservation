const seats = document.getElementById("seats")

for (let index = 0; index < 50; index++) {
    const seatsElement = document.createElement("div")
    seatsElement.classList.add("chair")
    seatsElement.classList.add("not-occupied")
    seats.appendChild(seatsElement)
}

const chair = document.getElementsByClassName("chair")
for (let index = 0; index < chair.length; index++) {
    const element = chair[index];
    element.addEventListener("click", function() {
        if (element.classList.contains("occupied")) {
            element.classList.remove("occupied")
            element.classList.add("not-occupied")
            return
        }
        element.classList.remove("not-occupied")
        element.classList.add("occupied")
    })
}