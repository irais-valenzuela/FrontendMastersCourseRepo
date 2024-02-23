document.getElementById("toggle").addEventListener('change', () => {
    const htmlTag = document.documentElement
    const dataThemeValue = htmlTag.getAttribute("data-theme")

    if (dataThemeValue === "dark") htmlTag.setAttribute("data-theme", "light")
    else if (dataThemeValue === "light") htmlTag.setAttribute("data-theme", "dark")
})