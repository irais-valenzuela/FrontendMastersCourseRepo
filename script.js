document.getElementById("toggle").addEventListener('change', () => {
    // returns collection
    const htmlTag = document.getElementsByTagName("html")[0]
    const dataThemeValue = htmlTag.getAttribute("data-theme")

    if (dataThemeValue === "dark") htmlTag.setAttribute("data-theme", "light")
    else if (dataThemeValue === "light") htmlTag.setAttribute("data-theme", "dark")
})