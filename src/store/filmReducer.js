const defaultState = {}

const GET_FILMS = "GET_FILMS"
const GET_FILM = "GET_FILM"
const NEW_LIST = "NEW_LIST"
const NEW_PAGE = "NEW_PAGE"

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILM:
            try {
                return {...state, film: action.payload}
            } catch (e) {
                console.log(e)
            }
        case GET_FILMS:
            try {
                return {...state, films: state.films.concat(action.payload)}
            } catch (e) {
                console.log(e)
            }
        case NEW_PAGE:
            try {
                return {...state, page: action.payload}
            } catch (e) {
                console.log(e)
            }
        case NEW_LIST:
            try {
                return {films: [...action.payload]}
            } catch (e) {
                console.log(e)
            }
        default:
            return state
    }
}
export const getFilmAction = payload => ({type: GET_FILM, payload})
export const getFilmsAction = (payload) => ({type: GET_FILMS, payload})
export const newFilmsAction = (payload) => ({type: NEW_LIST, payload})
export const newPageAction = (payload) => ({type: NEW_PAGE, payload})