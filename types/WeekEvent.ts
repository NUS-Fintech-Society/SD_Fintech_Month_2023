export type WeekEvent = {
    id : number,
    date : string;
    time? : string;
    venue? : string;
    title : string;
    label : string;
    speakerInfo ? : SpeakerInfo[];
}

export type Week = {
    id : number;
    label : string;
    date? : string;
}

export type SpeakerInfo ={
    id : number,
    organisation : string;
    speaker : string;
    position : string;
}