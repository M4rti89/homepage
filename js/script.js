{
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const nameTheme = document.querySelector(".js-buttonName")

        body.classList.toggle("darkTheme");
        nameTheme.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
    }

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", toggleBackground);
    }

    init();
}