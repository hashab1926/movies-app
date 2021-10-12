const initialState = {
    navbar: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NAVBAR': {
            return {
                ...state,
                navbar: true
            }
        }

        case 'HIDE_NAVBAR': {
            return {
                ...state,
                navbar: false
            }
        }
    }

    return state;
}

export default rootReducer;