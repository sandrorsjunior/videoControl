import { useContext } from "react";
import { GlobalContext } from "../../contexts/ContextGlobal";

export const Subtitle = () =>{
    const ctx = useContext(GlobalContext);
    return(
        <h1>{ctx?.globalData?.video.toString()}</h1>
    );
}