const defaultState = {}

const GET_FILMS = "GET_FILMS"
const NEW_LIST = "NEW_LIST"
const NEW_PAGE = "NEW_PAGE"

export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS:
            try {
                return {...state, films: state.films.concat(action.payload)}
            } catch (e) {
                console.log(e)
                //return {error: [action.payload]}
            }
        case NEW_PAGE:
            try {
                return {...state, page: action.payload}
            } catch (e) {
                console.log(e)
                //return {...state, error: [action.payload]}
            }
        case NEW_LIST:
            try {
                return {films: [...action.payload]}
            } catch (e) {
                return {...state, error: [action.payload]}
            }
        default:
            return state
    }
}

export const getFilmsAction = (payload) => ({type: GET_FILMS, payload})
export const newFilmsAction = (payload) => ({type: NEW_LIST, payload})
export const newPageAction = (payload) => ({type: NEW_PAGE, payload})