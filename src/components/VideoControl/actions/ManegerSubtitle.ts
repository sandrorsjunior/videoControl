interface Subtitle{
    id: number,
    start:string,
    end:string,
    text:string
}

export interface ManagerSubtitleInterface{
    getSubTitleById: (id:number) => Subtitle|null;
    getCurrentSubtitle: (currentTime:number) => Subtitle|null;
    //getNextSubtitle: () => Subtitle;
    //getBeforeSubtitle: () => Subtitle;
    //repeatCurrentSubtitle: () => Subtitle;
}

export class ManagerSubtitle implements ManagerSubtitleInterface{
    private _subtitle: Subtitle[]|null = null;

    
    public set subtitle(v: Subtitle[]|null){
        this._subtitle = v;
    }
    

    public static getSubtitleJSON = async (paht:string):Promise<Subtitle[]| null> => {
        let jsonObject: Subtitle[]| null = null;
        try {
            const response = await fetch(paht); // Local or remote file
            if (!response.ok) {
                throw new Error(`Status: ${response.status}`);
            }
            jsonObject = await response.json();
            console.log("JSON Object:", jsonObject);
            
        } catch (error) {
            console.error("Error fetching or parsing JSON:", error);
        }
        return jsonObject;
    }
    public getSubTitleById = (id: number):Subtitle|null => {
        return this._subtitle != null? this._subtitle[id]: null;
    };

    public getCurrentSubtitle = (currentTime:number):Subtitle|null => {
        return this._subtitle != null? this._subtitle[0]: null;
    };
}