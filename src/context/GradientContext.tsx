import React,{ useState } from "react";
import { createContext } from "react";

interface ImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colors: ImageColors,
    prevColors: ImageColors,
    setMainColors: (colors: ImageColors) => void
    setPrevMainColors: (colors: ImageColors) => void
}

export const GradientContext = createContext({} as ContextProps); //TODO definir tipo

export const GradientProvider = ({children}: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    function setMainColors(colors: ImageColors) {
        setColors(colors);
    }

    function setPrevMainColors(colors: ImageColors) {
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            { children }
        </GradientContext.Provider>
    )
}