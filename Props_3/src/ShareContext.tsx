import React, { createContext, useState } from 'react'


export const Share = createContext({} as any);
const ShareContext = ({ children }: any) => {
    const [number, setNumber] = useState<number>(10);

    const Plus = () => {
        setNumber(number + 1);
    };
    const Minus = () => {
        setNumber(number - 1);
    };

    return (
        <Share.Provider value={{ number,Plus, Minus }}>
            {children}
        </Share.Provider>
    )
}

export default ShareContext
