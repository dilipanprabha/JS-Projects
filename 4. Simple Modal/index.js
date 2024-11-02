const body = document.querySelector("#body");
const button = document.querySelector("#button");
const modal = document.querySelector("#customModal");
const closeButton = document.querySelector("#close");
const modalOverlay = document.querySelector("#modal-overlay");

button.addEventListener("click", () => {
    modal.classList.remove("d-none");
    modalOverlay.classList.remove("d-none");
})

closeButton.addEventListener("click", () => {
    modal.classList.add("d-none");
    modalOverlay.classList.add("d-none");
})