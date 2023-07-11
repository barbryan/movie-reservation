const seats = document.getElementById("seats")

const title = document.getElementById("title")
const price = document.getElementById("price")
const available = document.getElementById("available")
const reserve = document.getElementById("reserved")
const total = document.getElementById("total")

/* var movie = {
    title: title.textContent,
    price: price.textContent,
    available: 0,
    reserve: 0,
    total: 0
} */

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
        }else {
            element.classList.remove("not-occupied")
            element.classList.add("occupied")
        }

        const chair = document.querySelectorAll(".chair")
        const occupied = document.querySelectorAll(".occupied")
        const chairArray = Array.from(chair)
        const occupiedArray = Array.from(occupied)
        
        available.textContent = chairArray.length - occupiedArray.length
        reserve.textContent = occupiedArray.length
        total.textContent = occupiedArray.length * price.textContent
    })
}