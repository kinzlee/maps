import React, {useContext, useReducer, createContext} from 'react';

// type Action = {type: 'increment'} |{type: 'decrement'} | any
// type Dispatch = (action:Action) => void
type State = {count: number}
type CountProviderProps = {children:React.ReactNode}

 const CountStateContext = createContext<any>(null);
const CountDispatchContext = createContext<any>(null);

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const state = {
        count: 0
}

const countReducer = (type, states=state): any => {
    switch(type) {
    case INCREMENT: {
      return {
          ...states,
          count: state.count + 1}
    }
    case DECREMENT: {
      return {
          ...states,
          count: state.count - 1}
    }
    default: {
        return state;
    }
  }
}

export const CountProvider = ({children}: CountProviderProps) => {
    const [state, dispatch] = useReducer<any>(countReducer, state)
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
    if(context === undefined) {
        throw new Error('useCountState must be within a provider')
    }
    return context;
}

export const useCountDisptach = () => {
    const context = useContext(CountDispatchContext);
    if(context === undefined) {
        throw new Error('useCountReducer must be within a provider')
    }
    return context
}
