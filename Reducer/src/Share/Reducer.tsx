import { createContext, useReducer } from 'react';
import { produce } from 'immer';
export const Share = createContext({} as any);

type CounterProviderProps = {
    children: React.ReactNode;
};
const Intial = {
    count: 0,
}
const Result = (state: any, action: any) => {
    console.log(action);
    switch (action.content) {
        case "PLUS":
            return {
                count: state.count + 1
            }
        case "MINUS":
            return {
                count: state.count - 1
            }
        case "DOUBLE":
            return {
                count: state.count * 2
            }
        case "DIVISION":
            return {
                count: state.count / 2
            }
        case "RETURN":
            return {
                count: 0
            }
        default:
            return state;
    }
}
const Reducer = ({ children }: CounterProviderProps) => {
    const [state, dispatch] = useReducer(produce(Result), Intial);

    return (
        <Share.Provider value={{ state, dispatch }}>
            {children}
        </Share.Provider>
    )
}

export default Reducer
