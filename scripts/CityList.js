import { getCities, getWalkers } from "./database.js"

const cities = getCities()

document.addEventListener(
    "click",
    (clickCity) => {
        const cityTarget = clickCity.target
        const cityId = cityTarget.dataset.walkercity
        const allWalkers = getWalkers()

        for (const walker of allWalkers) {
            if (walker.cityId === parseInt(cityId)) {
                window.alert(`${walker.name} is servicing this city`)
            }
        }
    }
)


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-cityid="${city.id}" data-type="city" data-walkercity="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

