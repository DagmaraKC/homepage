console.log("Witaj w moim kodzie :)");

let backgroundButton = document.querySelector(".js-backgroundButton");
let lightBackground = document.querySelector(".js-lightBackground");
let darkBackground = document.querySelector(".body__background--dark");
let body = document.querySelector(".body");
let button = document.querySelector(".js-backgroundButton");
let navigation = document.querySelector(".js-navigation");
let navigationDark = document.querySelector(".navigation__link--dark");

backgroundButton.addEventListener("click", () => {
    body.classList.toggle("body__background--dark");
    navigation.classList.toggle("navigation__link--dark");

    backgroundButton.innerText = body.classList.contains(
        "body__background--dark"
    )
        ? "Wyłącz ciemny motyw"
        : "Włącz ciemny motyw";
});
