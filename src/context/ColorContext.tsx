import { createContext } from "react";

export interface ColorsProps {
    colors: {
        lightBackground: string;
        darkBackground: string;
        lightFont: string;
        darkFont: string;
        searchButton: string;
        humidityBar: string;
        wrongCityMessage:string
    }
}

export const colors = {
    lightBackground: '#1E213A',
    darkBackground: '#100E1D',
    lightFont: '#E7E7EB',
    darkFont: '#A09FB1',
    searchButton: '#3C47E9',
    humidityBar: '#FFB800',
    wrongCityMessage:'#FFCCCC',
    scrollBarHover:'#9b6f00',

}
export const ColorContext = createContext(colors)