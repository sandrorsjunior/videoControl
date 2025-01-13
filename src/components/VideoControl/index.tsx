import { FC, useContext, useState, useEffect, KeyboardEvent } from "react";
import { GlobalContext } from "../../contexts/ContextGlobal";
import "./style.css";
import { ManagerVideo } from "./actions/ManegerVideo";
import { ManagerSubtitle } from "./actions/ManegerSubtitle";

export const VideoControl = () => {
    const ctx = useContext(GlobalContext);
    let videoRef = ctx?.globalData?.video;
    const subTitle = ManagerSubtitle.getSubtitleJSON("src\assets\subtitle.json");
    const managerSubtitle = new ManagerSubtitle();
    subTitle.then((value)=>{
        managerSubtitle.subtitle = value;
    });
    const managerVideo = new ManagerVideo(videoRef, managerSubtitle);

    const handleKeyBoard = (e: KeyboardEvent) => {
        console.log(e.key);
        switch (e.key) {
            case "a":
                managerVideo.paly();
                break;
            case "s":
                managerVideo.pause();
                break;
            case "q":
                managerVideo.pause();
                break;
            case "w":
                managerVideo.paly();
                break;
        }
    };
    return (
        <div id="videoControl">
            <button id="play" onClick={()=>managerVideo.paly()} onKeyDown={handleKeyBoard}>
                PLAY
            </button>
            <button id="pause" onClick={()=>managerVideo.pause()} onKeyDown={handleKeyBoard}>
                PAUSE
            </button>
            <button id="stop" onClick={()=>managerVideo.paly()}>
                STOP
            </button>
            <button id="next" onClick={()=>managerVideo.paly()}>
                NEXT
            </button>
            <button id="previou" onClick={()=>managerVideo.paly()}>
                PREVIOU
            </button>
        </div>
    );
};
