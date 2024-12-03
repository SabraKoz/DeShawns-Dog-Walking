import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedOn = clickEvent.target
        const cityId = clickedOn.dataset.city
        const allCities = getCities()

        for (const city of allCities) {
            if (city.id === parseInt(cityId)) {
                window.alert(`This walker works in ${city.name}`)
            }
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id="${walker.id}" data-city="${walker.cityId}" data-type="walker">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

