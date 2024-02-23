document.getElementById("toggle").addEventListener('change', () => {
    const htmlTag = document.documentElement
    const currentDataThemeValue = htmlTag.getAttribute("data-theme")

    currentDataThemeValue === "dark" ?
        htmlTag.setAttribute("data-theme", "light") :
        htmlTag.setAttribute("data-theme", "dark")
})