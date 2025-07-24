let swithMode = document.getElementById("SwitchMode");

swithMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "ligt-mode.css") {
        theme.href = "dark-mode.css"
    } else {
        theme.href = "ligt-mode.css"
    }
}
