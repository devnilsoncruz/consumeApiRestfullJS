

function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')   // CRIANDO O NOME NO HTML
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg                // CRIANDO A BANDEIRA NO HTML
    flag.alt = countryName

    card.append(name, flag)
    document.querySelector('#countries').append(card)
}

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all') // CODIGO PARA FAZER A REQUISIÇÃO
    const countries = await response.json()

    countries.forEach(createCountryCard)
}

getCountries()

