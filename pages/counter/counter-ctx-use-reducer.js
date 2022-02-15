
import { useReducer, createContext, useContext } from 'react'


const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return state + 1;
        case 'SUBTRACT':
            return state - 1;
        default:
            return state;
    }
};

const CounterContext = createContext(null);

const CounterContextProvider = ({children}) => (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
        {children}
    </CounterContext.Provider>  
)

export const Container = () => (
    <div>
        <AddOneButton />
        <RemoveOneButton />
    </div>
)

const AddOneButton  = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => dispatch({ type : "ADD" })}>Add One</button>
        </div>
    )
}

const RemoveOneButton  = () => {
    const [, dispatch] = useContext(CounterContext);
    return (
        <div>
            <button onClick={() => dispatch({ type : "SUBTRACT" })}>Remove</button>
        </div>
    )
}


const Counter = () => {
    const [counter] = useContext(CounterContext);
    return(
        <div>Counter: {counter}</div>
    )
}

function CounterUseState() {
    return (
        <CounterContextProvider>
            <Container  />
            <Counter  />
        </CounterContextProvider>
    )
}

export default function CounterFunctionState(){
    return(
        <>
            <CounterUseState />
            <CounterUseState />
        </>
    )
}