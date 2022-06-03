const defaultState = {
    filmsData: Object
}

const GET_FILMS = "GET_FILMS"
const NEW_LIST = "NEW_LIST"

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS:
            try {
                return {films: [state, action.payload]}
            } catch (e) {
                console.log(e)
                return {error: [action.payload]}
            }
        case NEW_LIST:
            try {
                return {films: [...action.payload]}
            } catch (e) {
                return {error: [action.payload]}
            }
        default:
            return state
    }
}

export const getFilmsAction = (payload) => ({type: GET_FILMS, payload})
export const newFilmsAction = (payload) => ({type: NEW_LIST, payload})