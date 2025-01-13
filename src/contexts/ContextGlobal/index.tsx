import { createContext, useState, FC, ReactNode } from "react";

export interface GlobalData {
    video: React.MutableRefObject<HTMLVideoElement | null>
}

export interface DataContol {
    globalData: GlobalData|null,
    seglobalData: React.Dispatch<GlobalData>
}

interface GlobalContextProviderProps{
    children: ReactNode
}
export const GlobalContext = createContext<DataContol|null>(null);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({children}) =>{
    const [globalData, seglobalData] = useState<GlobalData|null>(null);
    return (
        <GlobalContext.Provider value={{globalData, seglobalData}}>
            {children}
        </GlobalContext.Provider>
    );
}