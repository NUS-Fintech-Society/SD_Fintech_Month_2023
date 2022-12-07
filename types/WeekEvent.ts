export type WeekEvent = {
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
    organisation : string;
    speaker : string;
    position : string;
}