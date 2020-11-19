import {useReducer, useCallback} from 'react';
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


//action creators
export const fetching = () => ({type:FETCHING});
export const success = (response) => ({type:SUCCESS, response});
export const error = (response) => ({type:ERROR, response});


//implementing useReducer
const [state, dispatch] = useReducer(reducer, initialState);


//using the api call
const useApiRequest = (endpoint, { verb = 'get', params = {} } = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const makeRequest = useCallback(async () => {
        dispatch(fetching());
        try {
            const response = await fetch([verb](endpoint, params));
            dispatch(success(response));
        } catch (e) {
            dispatch(error(e));
        }
    }, [endpoint, verb, params]);

    return [state, makeRequest];
};

export default useApiRequest;
