const defaultState = {}

const GET_TVS = "GET_TVS"
const GET_TV = "GET_TV"
const NEW_TV_LIST = "NEW_TV_LIST"
const NEW_TV_PAGE = "NEW_TV_PAGE"

export const tvReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TV:
            try {
                return {...state, tv: action.payload}
            } catch (e) {
                console.log(e)
            }
        case GET_TVS:
            try {
                return {...state, tv: state.tv.concat(action.payload)}
            } catch (e) {
                console.log(e)
            }
        case NEW_TV_PAGE:
            try {
                return {...state, tvPage: action.payload}
            } catch (e) {
                console.log(e)
            }
        case NEW_TV_LIST:
            try {
                return {tv: [...action.payload]}
            } catch (e) {
                console.log(e)
            }
        default:
            return state
    }
}
export const getTvAction = payload => ({type: GET_TV, payload})
export const getTvsAction = (payload) => ({type: GET_TVS, payload})
export const newTvsAction = (payload) => ({type: NEW_TV_LIST, payload})
export const newTvPageAction = (payload) => ({type: NEW_TV_PAGE, payload})