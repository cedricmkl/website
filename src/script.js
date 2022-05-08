const mobileNavbarContainer = document.querySelector("#mobilenavbar")

document.querySelector("#menu").onclick = () => {
    mobileNavbarContainer.classList.toggle("hidden")
}