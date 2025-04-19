const toggle = document.getElementById("toggle"),
toggleBtn = document.querySelector(".toggle span"),
mode = document.querySelector(".mode"),
header = document.querySelector("header"),
detailsSpans = document.querySelectorAll(".details > span");

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
        toggle.classList.toggle("dark-mode");
    toggleBtn.classList.toggle("dark");

    if (toggle.classList.contains("dark-mode")) {
        mode.innerHTML = "Dark Mode";
        document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
        document.querySelectorAll(".light-text").forEach(text => text.classList.add("dark-text"));
        document.querySelectorAll(".col").forEach(el => el.classList.add("dark-mode"));
        document.querySelector(".main-head h2").classList.add("dark-mode");
        document.querySelectorAll(".info h3").forEach(el => el.classList.add("dark-mode"));
        detailsSpans.forEach(span => span.classList.add("dark-mode"));
    } else {
        mode.innerHTML = "Light Mode";
        document.body.style.backgroundColor = "white";
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
        document.querySelectorAll(".light-text").forEach(text => text.classList.remove("dark-text"));
        document.querySelectorAll(".col").forEach(el => el.classList.remove("dark-mode"));
        document.querySelector(".main-head h2").classList.remove("dark-mode");
        document.querySelectorAll(".info h3").forEach(el => el.classList.remove("dark-mode"));
        detailsSpans.forEach(span => span.classList.remove("dark-mode"));
    }
})
