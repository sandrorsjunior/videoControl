import "./style.css";
import { FC, useRef, useContext } from "react";
import { GlobalContext } from "../../contexts/ContextGlobal";
import { VideoControl } from "../VideoControl";

interface Props{
    url:string,
}

export const VideoBox:FC<Props> = ({url})=>{
    const ctx = useContext(GlobalContext);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    ctx?.seglobalData({video:videoRef});
    return(
        <div id="videoBox">
            <video id="video" ref={videoRef} src={url}></video>
            <VideoControl/>
        </div>
    );
}
