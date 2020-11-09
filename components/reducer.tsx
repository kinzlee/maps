// actions
const FETCHING = 'FETCHING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const initialState = {
    status: null,
    response: null
}

const reducer = (state=initialState, {type, response} = {}) => {
    switch(type) {
        case FETCHING: {
            return {...initialState, status:FETCHING}
        }
        case SUCCESS: {
            return {...state, staus: SUCCESS, response}
        }
        case ERROR: {
            return {...state, status:ERROR, response}
        }
        default:
            return state;
    }
}