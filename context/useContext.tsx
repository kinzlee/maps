import React, {useContext, useReducer, createContext} from 'react';

type Action = {type: 'increment'} |{type: 'decrement'}
type Dispatch = (action:Action) => void
type State = {count: number}
type CountProviderProps = {children:React.ReactNode}

 const CountStateContext = createContext<State | undefined>(undefined);
const CountDispatchContext = createContext<Dispatch | undefined>(undefined);

const countReducer = (action:Action, state:State) => {
    switch(action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error(`Unhandled erorr action type: ${action.type}`)
        }
    }
}

export const CountProvider = ({children}: CountProviderProps) => {
    const [state, dispatch] = useReducer<any>(countReducer, {count: 0})
            return (
                <CountStateContext.Provider value={state}>
                    <CountDispatchContext.Provider value={dispatch}>
                        {children}
                    </CountDispatchContext.Provider>
                </CountStateContext.Provider>
            )
}

export const useCountState = () => {
    const context = useContext(CountStateContext);
    if(context == undefined) {
        throw new Error('useCountState must be within a provider')
    }
    return context;
}

export const useCountDisptach = () => {
    const context = useContext(CountDispatchContext);
    if(context == undefined) {
        throw new Error('useCountReducer must be within a provider')
    }
    return context
}
