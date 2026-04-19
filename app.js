(async() => {

const imgHolder = document.getElementById('imgholder')
const img = document.createElement('img')

const getJsonFrom = url => {
    return fetch(url).then(response => response.json())
}

const getRandomPokemon = () => {
    return getJsonFrom('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150))
}

const renderPokemon = Pokemon => {
    img.alt = Pokemon.name;
    img.src = Pokemon.sprites.front_default
    imgHolder.append(img)
}

const pokemon = await getRandomPokemon()

renderPokemon(pokemon)


})()