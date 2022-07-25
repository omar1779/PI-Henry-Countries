import { GET_ALL_COUNTRIES, GET_COUNTRY_NAME,GET_COUNTRY_ID } from "../action";
const initialState = {
    allCountries: [],
    postActivity : [],
    detail : []
}

export default function rootReducer (state = initialState , action) {
    switch (action.type) {
        case GET_COUNTRY_NAME:
            return {
                ...state ,
                allCountries: action.payload
            }
        case GET_COUNTRY_ID:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        default:
            return state;
    }
}