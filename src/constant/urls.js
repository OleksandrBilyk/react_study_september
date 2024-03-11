const baseURL = 'https://rickandmortyapi.com/api'

const episode = '/episode'
const character = '/character'

const urls = {
    episode,
    character: {
        byIds: (idcharacters) => `${character}/${idcharacters}`
    }
}
export {
    baseURL,
    urls
}