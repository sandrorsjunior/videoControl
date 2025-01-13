import { ManagerSubtitleInterface } from "./ManegerSubtitle";

export class ManagerVideo{
    private _videRef:React.MutableRefObject<HTMLVideoElement | null> | undefined;
    private _managerSubtitle: ManagerSubtitleInterface;

    constructor(
        videRef:React.MutableRefObject<HTMLVideoElement | null >| undefined, 
        managerSubtitle: ManagerSubtitleInterface
        )
    {
        this._videRef = videRef;
        this._managerSubtitle = managerSubtitle;
    }

    
    public get videRef() : React.MutableRefObject<HTMLVideoElement | null> | undefined {
        return this._videRef;
    }

    public set videRef(v : React.MutableRefObject<HTMLVideoElement | null>) {
        this._videRef = v;
    }

    public get subtitle() : ManagerSubtitleInterface {
        return this._managerSubtitle;
    }

    public set subtitle(v : ManagerSubtitleInterface) {
        this._managerSubtitle = v;
    }
    
    public pause = (): void =>{
        this._videRef?.current?.pause();
    }
    public paly = (): void =>{
        this._videRef?.current?.play();
    }
    public getCurrentTime = (): number =>{
        let currentTime = this._videRef?.current?.currentTime;
        currentTime = currentTime == undefined? 0 : currentTime;
        return currentTime;
    }
    

}