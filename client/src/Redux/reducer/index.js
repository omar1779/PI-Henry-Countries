
const initialState = {
    saludo : 'hola'
}

export default function rootReducer (state = initialState , action) {
    switch (action.type) {
        default:
            return state;
    }
}