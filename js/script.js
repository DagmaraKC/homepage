{
    const welcome = () => {
        console.log("Witaj w moim kodzie :)");
    };

    const OnChangeThemeClick = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");
        const navigation = document.querySelector(".js-navigation");
        const body = document.querySelector(".body");

        body.classList.toggle("body__background--dark");
        navigation.classList.toggle("navigation__link--dark");

        backgroundButton.innerText = body.classList.contains(
            "body__background--dark"
        )
            ? "Wyłącz ciemny motyw"
            : "Włącz ciemny motyw";
    };

    const init = () => {
        const backgroundButton = document.querySelector(".js-backgroundButton");
        backgroundButton.addEventListener("click", OnChangeThemeClick);
        welcome();
    };

    init();
}
